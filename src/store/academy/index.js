import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"

export default {
  state() {
    return {
      academies: []
    }
  },
  actions,
  mutations,
  getters
}