export default {
  authenticate(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
  },
  logout(state) {
    state.token = null;
    state.userId = null;
  }
}