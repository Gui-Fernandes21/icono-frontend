export default {
  isAuth(state) {
    return !!state.token;
  },
  getUserId(state) {
    return state.userId;
  }
}