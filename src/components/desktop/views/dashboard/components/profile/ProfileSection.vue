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
			<button class="primary-btn" @click="toggleModal">edit profile</button>
		</div>
	</div>

	<BaseModal :open="openModal" @close-modal="toggleModal">
		<template #header>
			<h1>Edit Profile</h1>
		</template>

		<template #main>
			<div class="modal__section">
				<p>Edit Profile Picture:</p>
				<div class="picture-section">
					<div class="input-control">
						<div class="img-container edit-pic" @click="uploadPicture">
							<img :src="profilePicUrl" alt="profile_picture" />
						</div>
						<input
							ref="file"
							v-show="false"
							type="file"
							@input="captureFile"
							capture
						/>
					</div>
					<p v-if="picFile">
						{{ picFile.name }} <span @click="clearFile">X</span>
					</p>
				</div>
			</div>

			<div class="modal__section">
				<p>Edit Name:</p>
				<div class="name-section">
					<div class="input-control">
						<input
							type="text"
							placeholder="First Name"
							class="input-control__input"
						/>
					</div>
					<div class="input-control">
						<input
							type="text"
							placeholder="Last Name"
							class="input-control__input"
						/>
					</div>
				</div>
			</div>

			<div class="modal__section">
				<p>Edit Biography:</p>
				<div class="name-section">
					<div class="input-control">
						<textarea
							type="text"
							placeholder="Bio"
							class="input-control__input"
						/>
					</div>
				</div>
			</div>
		</template>

		<template #action>
			<button class="primary-btn" disabled>Save Changes</button>
		</template>
	</BaseModal>
</template>

<script>
import BaseModal from "@/components/desktop/layout/BaseModal.vue";
export default {
	components: {
		BaseModal,
	},
	data() {
		return {
			openModal: false,
			picFile: null,
			picData: null,
		};
	},
	methods: {
		toggleModal() {
			this.openModal = !this.openModal;
		},
		uploadPicture() {
			this.$refs.file.click();
		},
		captureFile(input) {
			if (!input || !input.target.files[0]) return;

			const file = input.target.files[0];
			this.picFile = file;

			const fReader = new FileReader();
			fReader.readAsDataURL(file);
			fReader.onloadend = (parsed) => {
				this.picData = parsed.target.result;
			};
		},
		clearFile() {
			this.picData = null;
			this.picFile = null;
		},
	},
	computed: {
		profile() {
			return this.$store.getters.getProfile;
		},
		profilePicUrl() {
			if (!this.profile) return;
			if (!this.picData) return "/img/gui-pan-medal.jpg";

			return this.picData;
		},
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
.img-container {
	border-radius: 50%;
	width: 15rem;
	height: 15rem;

	overflow: hidden;

	img {
		width: 100%;
	}
}
.edit-pic {
	position: relative;
}
.edit-pic::after {
	content: "";
	cursor: pointer;
	display: block;
	position: absolute;
	z-index: 3;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	border-radius: 50%;
	transition: 150ms ease-in-out all;
	/* background-color: rgba(0, 0, 0, 0.102); */
}
.edit-pic:hover:after {
	background-color: rgba(0, 0, 0, 0.437);
}
.name-section {
	display: flex;
	gap: 2rem;
	width: 100%;
}
.input-control,
.input-control__input {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.bio {
	font-family: "Poppins", sans-serif;
	text-align: start;
	margin: 2rem 0;
}
.picture-section {
	text-align: center;

	p {
		margin-top: 1rem;
		gap: 1rem;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
.picture-section > p > span {
	font-family: "Russo One", sans-serif;

	padding: 2px;
	cursor: pointer;
	display: block;
	height: 100%;
	width: 1.5rem;
	border: 1px solid #e75252;
	color: #e75252;

	transition: 150ms ease-in-out all;
}
.picture-section > p > span:hover {
	background-color: #e75252;
	color: #fff;
}
</style>
