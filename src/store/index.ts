import { createStore } from 'vuex';
import user from './user/index';
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  key: 'logged-user', // This is the key used to identify your data in localStorage
  storage: window.localStorage
})

export default createStore({
  state () {
    
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user
  },
  plugins: [vuexLocal.plugin]

})
