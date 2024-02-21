export default {
	async getDashboard({ commit, getters, dispatch }) {
		const query = `
				query($userId: ID!) {
					dashboard(userId: $userId) {
						id
						email
						clearance
						profile {
							firstName
							lastName
							picUrl
							rank
							biography						
						}
						membership {
							id
							expiry_date
							payment
							member_since
							status
							type			
						}
					}
				}
			`;

		const payload = {
			query,
			variables: { userId: getters.getUserId },
		};

		const data = await dispatch("callApi", payload);

		if (data.dashboard == null) {
			await dispatch("logout");
			throw new Error("User not found");
		}

		const user = {
			id: data.dashboard.id,
			email: data.dashboard.email,
			clearance: data.dashboard.clearance,
		};

		const profile = data.dashboard.profile;
		const membership = data.dashboard.membership;

		await commit("setUser", user);
		await commit("setProfile", profile);
		await commit("setMembership", membership);

		return { msg: "ok", status: 200 };
	},
	async updateProfile({ getters, commit, dispatch }, dataInput) {
		const query = `
			mutation($data: ProfileInput!) {
				updateProfile(data: $data) {
					id
					firstName
					lastName
					picUrl
					rank
					biography	
				}
			}
		`;

		const payload = {
			query,
			variables: {
				data: {
					userId: getters.getUserId,
					...dataInput,
				},
			},
		};

		const data = await dispatch("callApi", payload);

		if (data.updateProfile == null) {
			throw new Error("error occured when updating the profile!");
		}

		commit("setProfile", data.updateProfile);

		return { msg: "ok", status: 200 };
	},
	async createMembership({ commit, dispatch }, dataInput) {
		const query = `
			mutation($data: createMembershipInput!) {
				addMembership(data: $data) {
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
			variables: dataInput,
		};

		const data = await dispatch("callApi", payload);

		if (data.addMembership == null) {
			throw new Error(
				"error occured when creating the membership! Try again later."
			);
		}

		commit("setMembership", data.addMembership);

		return { msg: "ok", status: 200 };
	},
	async cancelMembership({ getters, commit, dispatch }) {
		const query = `
			mutation($id: ID!) {
				cancelMembership(id: $id)
			}
		`;

		const payload = {
			query,
			variables: { id: getters.getMembership.id },
		};

		const data = await dispatch("callApi", payload);

		if (data.cancelMembership == null) {
			throw new Error(
				"error occured when creating the membership! Try again later."
			);
		}

		commit("setMembership", null);

		return { msg: "ok", status: 200 };
	},
};
