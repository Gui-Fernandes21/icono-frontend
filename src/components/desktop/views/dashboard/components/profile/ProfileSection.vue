<template>
	<div class="container" v-if="profile">
		<div class="img-container">
			<img :src="profilePic" alt="profile_pic" />
		</div>
		<header>
			<h1>{{ profile.firstName }} {{ profile.lastName }}</h1>
			<span class="belt">{{ profile.rank }} Belt</span>
		</header>
		<span class="gym">Icon Jiu Jitsu Team - Brussels</span>

		<p class="bio">{{ profile.biography }}</p>

		<div class="action">
			<button class="primary-btn" @click="toggleModal">edit profile</button>
		</div>
	</div>

	
	<EditProfileModal
		v-if="profile"
		:open="openModal"
		@close-modal="toggleModal"
		:profile="profile"
	></EditProfileModal>
</template>

<script>
import EditProfileModal from "./EditProfileModal.vue";

export default {
	components: {
		EditProfileModal,
	},
	data() {
		return {
			openModal: false,
		};
	},
	methods: {
		toggleModal() {
			this.openModal = !this.openModal;
		},
	},
	computed: {
		profile() {
			return this.$store.getters.getProfile;
		},
		profilePic() {
			return this.profile.picUrl ? this.profile.picUrl : '/img/unknown-profile.jpg';
		}
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

	background-color: #3a3a3a;
	border-radius: 6px;
	box-shadow: 0 0 6px #0000005a;

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
.bio {
	font-family: "Poppins", sans-serif;
	text-align: start;
	margin: 2rem 0;
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
</style>
