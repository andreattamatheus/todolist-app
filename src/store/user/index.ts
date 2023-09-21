export default {
  namespaced: true,
  state: () => ({
    user: {},
    isAuthenticated: false,
  }),
  mutations: {
    STORE_USER(state: any, user: any) {
      state.user = user;
    },
    SET_AUTH(state: any, isAuthenticated: any) {
      state.isAuthenticated = isAuthenticated;
    },
  },
  actions: {
    login({ commit }: any) {
      console.log('entrou no action')
      // Implement your API login logic here
      // After successful login, commit mutations to update state
      commit('SET_AUTH', true);
      // You can also commit user data if needed
      // commit('SET_USER', userData);
    },
    logout({ commit }: any) {
      // Implement your logout logic here (e.g., clearing tokens)
      // After logout, commit mutations to update state
      commit('SET_AUTH', false);
      commit('STORE_USER', null);
    },
  },
  getters: {
    isAuthenticated: (state: any) => state.isAuthenticated,
    user: (state: any) => state.user,
  },
  modules: {},
};
