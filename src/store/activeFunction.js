export default {
  state: { type: null },
  getters: {
    getActiveFn(state) {
      return state.type;
    },
  },
  actions: {
    updateGeo(ctx, type) {
      ctx.commit("changeState", type);
    },
  },
  mutations: {
    changeState(state, type) {
      state.type = type;
    },
  },
};
