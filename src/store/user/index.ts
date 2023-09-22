export default {
  namespaced: true,
  state: () => ({
    name: '',
    email: '',
    isAuthenticated: false,
  }),
  mutations: {
    STORE_USER(state: any, userData: any) {
      state.name = userData.name;
      state.email = userData.email;
    },
    SET_AUTH(state: any, isAuthenticated: any) {
      state.isAuthenticated = isAuthenticated;
    },
    CLEAR_USER(state: any) {
      state.name = '';
      state.email = '';
    }
  },
  actions: {
    login({ commit }: any, userData: any) {
      // Implement your API login logic here
      // After successful login, commit mutations to update state
      commit('SET_AUTH', true);
      commit('STORE_USER', {
        name: userData.name,
        email: userData.email
      });
      // You can also commit user data if needed
      // commit('SET_USER', userData);
    },
    logout({ commit }: any) {
      // Implement your logout logic here (e.g., clearing tokens)
      // After logout, commit mutations to update state
      commit('SET_AUTH', false);
      commit('CLEAR_USER');
    },
  },
  getters: {
    isAuthenticated: (state: any) => state.isAuthenticated,
    name: (state: any) => state.name,
    email: (state: any) => state.email,
  },
  modules: {},
};
