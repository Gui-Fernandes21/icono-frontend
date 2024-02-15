<template>
	<BaseModal :open="open">
		<template #header>
			<h1>Edit Profile</h1>
		</template>

		<template #main>
			<div class="modal__section">
				<p>Edit Profile Picture:</p>
				<div class="picture-section">
					<div class="input-control">
						<div class="img-container edit-pic" @click="uploadPicture">
							<img
								:src="
									profilePicUrl ? profilePicUrl : '/img/unknown-profile.jpg'
								"
								alt="profile_picture"
							/>
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
							v-model="firstName"
							type="text"
							placeholder="First Name"
							class="input-control__input"
						/>
					</div>
					<div class="input-control">
						<input
							v-model="lastName"
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
							v-model="biography"
							type="text"
							placeholder="Bio"
							class="input-control__input"
						/>
					</div>
				</div>
			</div>
		</template>

		<template #action>
			<button class="primary-btn" :disabled="disableSave" @click="saveChange">
				Save Changes
			</button>
		</template>
	</BaseModal>
</template>

<script>
import BaseModal from "@/components/desktop/layout/BaseModal.vue";

export default {
	components: {
		BaseModal,
	},
	props: {
		open: {
			type: Boolean,
			required: true,
		},
		profile: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			picFile: null,
			picUrl: this.profile.picUrl,

			firstName: this.profile.firstName,
			lastName: this.profile.lastName,
			biography: this.profile.biography,
		};
	},
	methods: {
		clearFile() {
			this.picUrl = null;
			this.picFile = null;
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
				this.picUrl = parsed.target.result;
			};
		},
		getDifferingValues(obj1, obj2) {
			const differingValues = {};

			for (const key in obj1) {
				if (
					Object.prototype.hasOwnProperty.call(obj2, key) &&
					obj1[key] !== obj2[key]
				) {
					differingValues[key] = obj2[key];
				}
			}

			return differingValues;
		},
		saveChange() {
			const payload = this.getDifferingValues(
				{ ...this.profile },
				{
					firstName: this.firstName,
					lastName: this.lastName,
					biography: this.biography,
					picUrl: this.picUrl,
				}
			);

			this.$store
				.dispatch("updateProfile", payload)
				.then(() => this.$emit("close-modal"))
				.catch((err) => console.log(err));
		},
	},
	computed: {
		profilePicUrl() {
			return this.picUrl ? this.picUrl : this.profile.picUrl;
		},
		disableSave() {
			if (this.firstName !== this.profile.firstName) return false;
			if (this.lastName !== this.profile.lastName) return false;
			if (this.biography !== this.profile.biography) return false;
			if (this.profilePicUrl !== this.profile.picUrl) return false;
			return true;
		},
	},
};
</script>

<style scoped>
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

	&:hover::after {
		background-color: rgba(0, 0, 0, 0.437);
	}

	&::after {
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
	}
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

	transition: 100ms ease-in-out all;

	&:hover {
		background-color: #e75252;
		color: #fff;
	}
}
</style>
