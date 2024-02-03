<template>
	<div class="container" v-if="profile">
		<div class="img-container">
			<img src="/img/gui-pan-medal.jpg" alt="" />
		</div>
		<header>
			<h1>{{ profile.name }}</h1>
			<span class="belt">{{ profile.rank }} Belt</span>
		</header>
		<span class="gym">Icon Jiu Jitsu Team - Brussels</span>

    <p class="bio">{{ profile.biography }}</p>

		<div class="action">
			<button>edit profile</button>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		init() {
			this.$store.dispatch("getProfile");
		},
	},
	computed: {
		profile() {
			return this.$store.getters.getProfile;
		},
	},
	beforeMount() {
		this.init();
	},
};
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	grid-column: 1;
	grid-row: 1 / span 2;

	background-color: #464646;
	border-radius: 6px;

	font-family: "Russo One", sans-serif;
	color: #fff;

	padding: 3rem 1rem;
}
header {
	display: grid;
	place-items: center;

	h1 {
		margin-bottom: 0.5rem;
	}
	span {
		margin: 0;
	}
}
span {
	font-family: "Poppins", sans-serif;
}
.gym {
	margin-top: 1.5rem;
}
.img-container {
	border-radius: 50%;
	width: 15rem;
	height: 15rem;

	overflow: hidden;

	img {
		width: 100%;
	}
}
.action > button {
	background-color: #e3943435;
	border: 1px solid #e39534;
	border-radius: 8px;
	color: #fff;
	cursor: pointer;

	padding: 1rem 5rem;
	width: 100%;
}
.bio {
  font-family: 'Poppins', sans-serif;
  text-align: start;
  margin: 2rem 0;
}
</style>
