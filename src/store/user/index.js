import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  state() {
    return {
      user: null,
      profile: null,
      membership: null
    }
  },
  getters,
  mutations,
  actions
}