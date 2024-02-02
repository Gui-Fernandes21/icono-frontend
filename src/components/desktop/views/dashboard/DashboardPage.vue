<template>
	<section id="dash-container">
		<section class="welcome-section">
			<h1>Welcome back</h1>
			<span>{{ user ? user.name : "" }}</span>
		</section>
	</section>
</template>

<script>
export default {
	computed: {
		user() {
			return this.$store.getters.getUser;
		},
	},
	beforeMount() {
		if (!this.$store.getters.isAuth) this.$router.replace("/home");

		if (!this.$store.getters.getUser) this.$store.dispatch("getUser");
	},
};
</script>
