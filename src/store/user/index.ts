export default {
  namespaced: true,
  state: () => ({
    name: '',
    email: '',
    isAuthenticated: false,
    accessToken: ''
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
      state.accessToken = '';
    },
    SET_TOKEN(state: any, token: any) {
      state.accessToken = token;
    }
  },
  actions: {
    login({ commit }: any, userData: any) {
      commit('SET_AUTH', true);
      commit('STORE_USER', {
        name: userData.name,
        email: userData.email
      });
      commit('SET_TOKEN', userData.access_token);
    },

    logout({ commit }: any) {
      commit('SET_AUTH', false);
      commit('CLEAR_USER');
    },
  },
  getters: {
    accessToken: (state: any) => state.accessToken,
    isAuthenticated: (state: any) => state.isAuthenticated,
    name: (state: any) => state.name,
    email: (state: any) => state.email,
  },
  modules: {},
};
