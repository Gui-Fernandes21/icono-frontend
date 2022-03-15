export default {
  authenticate(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    return;
  }
}