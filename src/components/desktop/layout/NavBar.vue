<template>
	<nav id="navbar">
		<a href="/home" class="logo">icono</a>
		<ul>
			<li>
				<router-link :to="'/home'" active-class="active">Home</router-link>
			</li>
			<li v-if="!auth">
				<router-link :to="'/login'" active-class="active">Login</router-link>
			</li>
			<li v-if="!auth">
				<router-link :to="'/signup'" active-class="active">Sign up</router-link>
			</li>
			<li v-if="auth">
				<a active-class="active" @click="logout">Logout</a>
			</li>
		</ul>
	</nav>
</template>

<script>

export default {
	computed: {
		auth() {
			return this.$store.getters.isAuth;
		},
	},
	methods: {
		logout() {},
	},
};
</script>

<style scoped lang="scss">
@import "@/styles/base/settings";

.logo {
	text-transform: uppercase;
	font-size: 3vh;
	font-weight: bold;
	letter-spacing: 4px;
	user-select: none;
	font-family: "Russo One", sans-serif;
}
nav {
  position: fixed;
	width: 80vw;
	margin: $m-size 10vw;
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 10vh;
	background: #000000a1;
	border-radius: $s-size;
	overflow: hidden;
  z-index: 10;
}
a {
	color: $base-orange;
	text-decoration: none;
	font-family: "Poppins", sans-serif;
	float: left;
	display: block;
}
ul {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30%;
}
ul li {
	list-style: none;
	margin: 0 1.5rem;
}
ul li a {
	font-weight: 200;
	font-size: 13px;
	font-family: "Russo One", sans-serif;
	user-select: none;
	font-size: 1.4vh;
	cursor: pointer;
}
ul li a:hover,
ul li a.active {
	border-bottom: 1px solid $base-orange;
}
.sticky {
	position: fixed;
	top: 0;
}
// .sticky + .content {
//   padding-top: 60px;
// }
</style>
