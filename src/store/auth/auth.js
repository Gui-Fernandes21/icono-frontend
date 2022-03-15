import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
  state() {
    return {
      token: null,
      userId: null,
    };
  },
  actions,
  mutations,
  getters
};
