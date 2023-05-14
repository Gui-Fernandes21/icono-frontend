<template>
	<section>
		<div class="">
			<header class="auth-section__header">
				<h1>Login</h1>
			</header>
			<div class="main-section">
				<div class="input-control">
					<input
						class="input-control__input"
						:class="fields.email.validator.status"
						:type="fields.email.type"
						v-model="fields.email.value"
						:placeholder="fields.email.placeholder"
						@keyup.enter="login"
					/>
				</div>
				<div class="input-control">
					<input
						class="input-control__input"
						:class="fields.secret.validator.status"
						:type="fields.secret.type"
						v-model="fields.secret.value"
						:placeholder="fields.secret.placeholder"
						@keyup.enter="login"
					/>
					<span class="auth-section__span"
						>Don't have an account yet?
						<router-link class="auth-section__span--link" to="/signup"
							>click here!</router-link
						></span
					>
				</div>
				<button class="big-button" @click="login">Login</button>
			</div>
		</div>
	</section>
</template>

<script>
import authMixin from "./authMixins.js";

export default {
	mixins: [authMixin],
	data() {},
	methods: {
		async login() {
			const variables = {
				email: this.fields.email.value,
				secret: this.fields.secret.value,
			};

			const answer = await this.$store.dispatch("login", variables);

			if (!answer) return;

			if (answer.msg === "ok") {
				this.fields.email.value = "";
				this.fields.secret.value = "";

				this.$router.push("/dashboard");
			}
		},
	},
};
</script>

<style scoped lang="scss">
@import "@/styles/base/settings";

.main-section {
	display: grid;
	grid-template-columns: 22vw;
	grid-template-rows: repeat(3, 12vh);
	justify-content: center;
	align-content: center;
}
</style>
