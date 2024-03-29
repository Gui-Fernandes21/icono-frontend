export default {
	setUser: (state, user) => (state.user = user),
	setProfile: (state, profile) => (state.profile = profile),
	setMembership: (state, membership) => (state.membership = membership),
	resetUserStore: (state) => {
		state.user = null;
		state.profile = null;
		state.membership = null;
	},
};
