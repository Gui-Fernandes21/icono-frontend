import { createStore } from "vuex";

import getters from "./rootGetters.js";
import actions from "./rootActions.js";
import mutations from "./rootMutations.js";

import authModule from "./auth/auth.js";
import userModule from './user/index';

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
    userModule
  },
});

export default store;
