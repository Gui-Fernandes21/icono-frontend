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

		await commit("setProfile", { ...data.profile });

		return { msg: "ok", status: 200 };
	},
	async getMembership({ commit, getters }) {
		const query = `
		query($id: ID!) {
			membership(userId: $id) {
				expiry_date
    		id
    		payment
    		member_since
    		status
    		type
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

		if (data.membership == null) {
			throw new Error("membership not found");
		}

		await commit("setMembership", { ...data.membership });

		return { msg: "ok", status: 200 };
	},
};
