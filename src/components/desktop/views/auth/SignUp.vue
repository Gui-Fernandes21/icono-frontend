<template>
	<section id="signup-wrapper">
		<div class="">
			<header class="auth-section__header">
				<h1>Sign up</h1>
			</header>
			<div class="main-section">
				<div class="input-control" v-for="field in fields" :key="field">
					<input
						class="input-control__input"
						:class="field.validator.status"
						@blur="validate(field)"
						:type="field.type"
						v-model="field.value"
						:placeholder="field.placeholder"
					/>
				</div>
				<button class="big-button" @click="signup">Sign up</button>
			</div>
		</div>
		<div class="errors-wrapper" v-if="errorList.length > 0">
			<ul>
				<li class="icon"><ion-icon name="warning-outline" /></li>
				<li v-for="error in errorList" :key="error">
					<p>{{ error.msg }}</p>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
import authMixin from "./authMixins.js";

export default {
	mixins: [authMixin],
	data() {},
	methods: {
		async signup() {
			if (this.fields.secret.value !== this.fields.confirmSecret.value) {
				this.errorList.push({
					status: 400,
					msg: "Passwords must match",
					payload: "",
					field: "Passwords",
				});
				this.fields.secret.validator.status = "invalid";
				this.fields.confirmSecret.validator.status = "invalid";
				return;
			}

			const variables = {
				firstName: this.fields.firstName.value,
				lastName: this.fields.lastName.value,
				email: this.fields.email.value,
				secret: this.fields.secret.value,
			};

			const answer = await this.$store.dispatch("signup", variables);

			console.log(answer);

			if (answer.msg === "ok") {
				this.fields.firstName.value = "";
				this.fields.lastName.value = "";
				this.fields.email.value = "";
				this.fields.secret.value = "";
				this.fields.confirmSecret.value = "";

				this.$router.push("/dashboard");
			}
		},
	},
	computed: {},
};
</script>

<style scoped lang="scss">
@import "@/styles/base/settings";
.main-section {
	display: grid;
	grid-template-rows: repeat(4, 12vh);
  gap: 0 1rem;
	grid-template-areas:
		"first last"
		"email email"
		"password confirm"
		"action action";
	justify-content: center;
	align-content: center;
}
.input-control:nth-child(1) {
	grid-area: first;
}
.input-control:nth-child(2) {
	grid-area: last;
}
.input-control:nth-child(3) {
	grid-area: email;
}
.input-control:nth-child(4) {
	grid-area: password;
}
.input-control:nth-child(5) {
	grid-area: confirm;
}
button {
	grid-area: action;
}
#signup-wrapper {
	position: relative;
}
.errors-wrapper {
	font-family: "Poppins", sans-serif;
	position: absolute;
	right: -37%;
	top: 25%;
	z-index: 300;
	padding: 2rem;
	background: rgba(255, 73, 73, 0.65);
	border-radius: 10px;
	max-width: 35%;
}
.errors-wrapper ul li {
	list-style: none;
	text-align: center;
	margin: 0.7rem 0;
}
.errors-wrapper ul li h1 {
	font-size: 2rem;
}
.errors-wrapper ul li p {
	font-size: 1rem;
}
.icon {
	font-size: 3rem;
}
</style>
