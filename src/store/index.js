import { createStore } from "vuex";

import getters from "./rootGetters.js";
import actions from "./rootActions.js";
import mutations from "./rootMutations.js";

import authModule from "./auth/auth.js";

const store = createStore({
  state() {
    return {
      isMobile: false
    };
  },
  actions,
  mutations,
  getters,
  modules: {
    authModule,
  },
});

export default store;
