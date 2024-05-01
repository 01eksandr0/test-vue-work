<template>
  <div id="map" class="w-5/6" style="height: 80vh"></div>
</template>

<script>
import maplibregl from "maplibre-gl";
import * as turf from "@turf/turf";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      point1: null,
    };
  },
  mounted() {
    this.map = new maplibregl.Map({
      container: "map",
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
      center: [30.524195830825278, 48.44992528158579],
      zoom: 1,
    });
    this.map.dragRotate.disable();
    this.map.touchZoomRotate.disableRotation();
    this.map.on("style.load", () => {
      this.addRandomPoints();
    });
    this.map.on("click", (e) => {
      if (!this.getActiveFn) return;
      const { lng, lat } = e.lngLat;
      if (this.getActiveFn === "point") {
        this.addPoint(lng, lat);
      } else if (this.getActiveFn === "line") {
        if (!this.point1) this.point1 = [lng, lat];
        else {
          const line = [[...this.point1], [lng, lat]];
          this.point1 = null;
          this.addLine(line);
        }
      } else if (this.getActiveFn === "poligon") {
        if (!this.point1) {
          this.point1 = [[lng, lat]];
        } else if (this.point1.length === 1) {
          this.point1.push([lng, lat]);
        } else if (this.point1.length === 2) {
          this.point1.push([lng, lat]);
          const poligon = [...this.point1, [...this.point1[0]]];
          this.point1 = null;
          this.addPoligon(poligon);
        }
      }
    });
  },
  computed: mapGetters(["getActiveFn", "getColor", "getGeo", "getOpacity"]),
  methods: {
    ...mapActions(["addOnePoint", "updateGeo", "addOneLine", "addOnePoligone"]),
    addRandomPoints() {
      const points = turf.randomPoint(30, {
        bbox: [-180, -90, 180, 90],
      }).features;
      points.forEach((point) => {
        this.addPoint(
          point.geometry.coordinates[0],
          point.geometry.coordinates[1]
        );
      });
    },
    addPoint(x, y) {
      const point = turf.point([x, y]);
      const index = this.getGeo.points.length;
      const pointGeoJSON = {
        type: "Feature",
        geometry: point.geometry,
        properties: {},
      };
      this.addOnePoint({ name: `point${index}`, geo: [x, y], type: "point" });
      this.map.addSource(`point${index}`, {
        type: "geojson",
        data: pointGeoJSON,
      });
      this.map.addLayer({
        id: `point${index}`,
        type: "circle",
        source: `point${index}`,
        paint: {
          "circle-radius": 2,
          "circle-color": this.getColor,
          "circle-opacity": this.getOpacity,
        },
      });
      this.updateGeo(null);
    },
    addLine(line) {
      const index = this.getGeo.linies.length;
      const linestring1 = turf.lineString(line, { name: `line${index}` });
      this.addOneLine({ name: `line${index}`, geo: line, type: "line" });
      this.map.addSource(`line${index}`, {
        type: "geojson",
        data: linestring1,
      });

      this.map.addLayer({
        id: `line${index}`,
        type: "line",
        source: `line${index}`,
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": this.getColor,
          "line-width": 2,
          "line-opacity": this.getOpacity,
        },
      });
      this.updateGeo(null);
    },
    addPoligon(poligon) {
      const polygon = turf.polygon([poligon]);
      const index = this.getGeo.poligons.length;
      this.addOnePoligone({
        name: `poligon${index}`,
        type: "poligon",
        geo: poligon,
      });
      this.map.addSource(`poligon${index}`, {
        type: "geojson",
        data: polygon.geometry,
      });

      this.map.addLayer({
        id: `poligon${index}`,
        type: "fill",
        source: `poligon${index}`,
        layout: {},
        paint: {
          "fill-color": this.getColor,
          "fill-opacity": this.getOpacity,
        },
      });
      this.updateGeo(null);
    },
  },
  watch: {
    getColor() {
      if (this.getGeo.points.length) {
        this.getGeo.points.forEach((point) => {
          this.map.setPaintProperty(point.name, "circle-color", this.getColor);
        });
      }
      if (this.getGeo.linies.length) {
        this.getGeo.linies.forEach((line) => {
          this.map.setPaintProperty(line.name, "line-color", this.getColor);
        });
      }
      if (this.getGeo.poligons.length) {
        this.getGeo.poligons.forEach((poligone) => {
          this.map.setPaintProperty(poligone.name, "fill-color", this.getColor);
        });
      }
    },
    getOpacity() {
      if (this.getGeo.points.length) {
        this.getGeo.points.forEach((point) => {
          this.map.setPaintProperty(
            point.name,
            "circle-opacity",
            this.getOpacity
          );
        });
      }
      if (this.getGeo.linies.length) {
        this.getGeo.linies.forEach((line) => {
          this.map.setPaintProperty(line.name, "line-opacity", this.getOpacity);
        });
      }
      if (this.getGeo.poligons.length) {
        this.getGeo.poligons.forEach((poligone) => {
          this.map.setPaintProperty(
            poligone.name,
            "fill-opacity",
            this.getOpacity
          );
        });
      }
    },
  },
};
</script>
