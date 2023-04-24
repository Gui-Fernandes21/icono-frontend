<template>
	<section>
		<div class="card">
			<header>
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
					/>
				</div>
				<div class="input-control">
					<input
						class="input-control__input"
						:class="fields.secret.validator.status"
						:type="fields.secret.type"
						v-model="fields.secret.value"
						:placeholder="fields.secret.placeholder"
					/>
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

			if (answer.msg === "ok") {
				this.fields.email.value = "";
				this.fields.secret.value = "";

				this.$router.push("/home");
			}
		},
	},
};
</script>

<style scoped lang="scss">
@import "@/styles/base/settings";

header {
	height: $xl-size;
	width: 100%;
	background: $base-orange;
	display: flex;
	align-items: center;
	font-family: "Oswald", sans-serif;
	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
}
header h1 {
	text-transform: uppercase;
	font-weight: 800;
	font-size: 2.5rem;
	margin: $l-size;
	// letter-spacing: 1px;
}
.main-section {
	height: 54vh;
	display: grid;
	grid-template-columns: 22vw;
	grid-template-rows: repeat(3, 12vh);
	justify-content: center;
	align-content: center;
}
</style>
