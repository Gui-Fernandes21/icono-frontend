export default {
	async signup({ commit, dispatch }, variables) {
		const query = `
      mutation($data: SignupInput!) {
        signup(data: $data) {
          token
          userId
        }
      }`;

		const payload = {
			query: query,
			variables: { data: variables },
		};

		const data = await dispatch("callApi", payload);

		await commit("authenticate", data.signup);

		return { msg: "ok", status: 200 };
	},
	async login({ commit, dispatch }, variables) {
		const query = `
      mutation Login($data: LoginInput!) {
        login(data: $data) {
          token
          userId
        }
      }
    `;

		const payload = {
			query,
			variables: { data: variables },
		};

		const data = await dispatch("callApi", payload);

		if (!data) {
			console.log("Error in authentication");
			return;
		}

		await commit("authenticate", data.login);

		localStorage.setItem("auth-token", data.login.token);
		localStorage.setItem("auth-userId", data.login.userId);

		return { msg: "ok", status: 200 };
	},
	logout({ commit }) {
		localStorage.removeItem("auth-token");
		localStorage.removeItem("auth-userId");
		commit("resetUserStore");
		commit("logout");
	},
};
