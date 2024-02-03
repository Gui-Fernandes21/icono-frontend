export default {
	getUsers() {},

	async getUser({ commit, getters, dispatch }) {
		const query = `
      query($id: ID!) {
        user(id: $id) {
          id
          email
          clearance
        }
      }
    `;

		const payload = {
			query,
			variables: { id: getters.getUserId },
		};

		const result = await fetch("http://localhost:4001/graphql", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(payload),
		});

		if (!result.ok) {
			throw new Error("Error on the request: " + result.json());
		}

		const { data } = await result.json();

		if (data.user == null) {
			await dispatch("logout");
			throw new Error("User not found");
		}

		console.log(data.user);

		await commit("setUser", { ...data.user });

		return { msg: "ok", status: 200 };
	},
	async getProfile({ commit, getters, dispatch }) {
		const query = `
		query($id: ID!) {
			profile(userId: $id) {
				name
				picUrl
				rank
				id
				biography			
			}
		}
	`;

		const payload = {
			query,
			variables: { id: getters.getUserId },
		};

		const result = await fetch("http://localhost:4001/graphql", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(payload),
		});

		if (!result.ok) {
			throw new Error("Error on the request: " + result.json());
		}

		const { data } = await result.json();

		if (data.profile == null) {
			await dispatch("logout");
			throw new Error("profile not found");
		}

		console.log(data.profile);

		await commit("setProfile", { ...data.profile });

		return { msg: "ok", status: 200 };
	},
};
