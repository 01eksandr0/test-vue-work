export default {
  state: { points: [], linies: [], poligons: [] },
  getters: {
    getGeo(state) {
      return state;
    },
  },
  actions: {
    addOnePoint(ctx, point) {
      ctx.commit("addPoint", point);
    },
    addOneLine(ctx, line) {
      ctx.commit("addLine", line);
    },
    addOnePoligone(ctx, poligon) {
      ctx.commit("addPoligone", poligon);
    },
  },
  mutations: {
    addPoint(state, point) {
      state.points.push(point);
    },
    addLine(state, line) {
      state.linies.push(line);
    },
    addPoligone(state, poligon) {
      state.poligons.push(poligon);
    },
  },
};
