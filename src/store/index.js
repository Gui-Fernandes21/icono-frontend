import { createStore } from "vuex";

import rootGetters from "./rootGetters.js";

import authModule from "./auth/auth.js";

const store = createStore({
  state() {
    return {
      isMobile: false
    };
  },
  actions: {},
  mutations: {},
  getters: {
    ...rootGetters
  },
  modules: {
    authModule,
  },
});

export default store;
