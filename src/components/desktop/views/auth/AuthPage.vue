<template>
	<div class="auth-container">
		<section class="auth-section">
			<LogIn v-if="isLogin" />
			<SignUp v-else />
		</section>
		<section class="logo-section">
			<h1>icono</h1>
		</section>
	</div>
</template>

<script>
import LogIn from "./LogIn.vue";
import SignUp from "./SignUp.vue";

export default {
	components: {
		SignUp,
		LogIn,
	},
	computed: {
		isLogin() {
			return this.$route.path == "/login";
		},
	},
};
</script>
