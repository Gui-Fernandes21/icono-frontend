export default {
	getUsers() {},

	async getUser({ commit, getters }) {
		const query = `
      query($id: ID!) {
        user(id: $id) {
          id
          name
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

    await commit("setUser", {...data.user});
    
		return { msg: "ok", status: 200 };
	},
};
