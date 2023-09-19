export default {
  namespaced: true,
  state: () => ({
    user: {},
  }),
  mutations: {
    STORE_USER(state: any, user: any) {
      state.user = user;
    },
  },
  actions: {},
  modules: {},
};
