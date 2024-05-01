<template>
  <nav class="bg-gray-800">
    <div
      class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative flex h-16 items-center justify-between"
    >
      <div
        class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
      >
        <div class="sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <router-link
              :to="{ name: 'map-page' }"
              :class="{
                'hover:bg-gray-700': true,
                'bg-gray-900': currentPage === '/',
                'text-white': true,
                'rounded-md': true,
                'px-3': true,
                'py-2': true,
                'text-sm': true,
                'font-medium': true,
              }"
              aria-current="page"
              >Карта</router-link
            >
            <router-link
              :to="{ name: 'tabl-page' }"
              :class="{
                'text-gray-300': true,
                'bg-gray-900': currentPage === '/tabl',
                'hover:bg-gray-700': true,
                'hover:text-white': true,
                'rounded-md': true,
                'px-3': true,
                'py-2': true,
                'text-sm': true,
                'font-medium': true,
              }"
              >Таблиця</router-link
            >
            <button @click="loadFile" class="text-gray-300">Завантажити</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { saveAs } from "file-saver";
export default {
  name: "MyHeader",
  data() {
    return {
      currentPage: "",
    };
  },
  computed: mapGetters(["getGeo"]),
  mounted() {
    this.currentPage = this.$route.path;
  },
  methods: {
    loadFile() {
      const geo = JSON.stringify(this.getGeo);
      const blob = new Blob([geo], { type: "application/json" });
      saveAs(blob, "geo.geojson");
    },
  },
  watch: {
    $route(to, from) {
      this.currentPage = to.path;
    },
  },
};
</script>
