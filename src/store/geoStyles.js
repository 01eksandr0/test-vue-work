export default {
  state: { color: "red", opacity: 1 },
  getters: {
    getColor(state) {
      return state.color;
    },
    getOpacity(state) {
      return state.opacity;
    },
  },
  actions: {
    updateColor(ctx, color) {
      ctx.commit("changeColor", color);
    },
    updateOpacity(ctx, opacity) {
      ctx.commit("changeOpacity", opacity);
    },
  },
  mutations: {
    changeColor(state, newColor) {
      state.color = newColor;
    },
    changeOpacity(state, newOpacity) {
      state.opacity = newOpacity;
    },
  },
};
