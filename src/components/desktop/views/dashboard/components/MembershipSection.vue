<template>
	<div class="container">
		<header>
			<h2>Membership</h2>
		</header>

		<div class="main-section" v-if="membershipDetails">
			<div class="row since">
				<div class="col-1">Member Since:</div>
				<div class="col-2">{{ memberSinceDate }}</div>
			</div>
			<div class="row expiration">
				<div class="col-1">Membership Expires:</div>
				<div class="col-2">{{ memberExpDate }}</div>
			</div>
			<div class="row status">
				<div class="col-1">Status:</div>
				<div class="col-2" :class="membershipDetails.status.toLowerCase()">
					{{ membershipDetails.status }}
				</div>
			</div>
			<div class="row type">
				<div class="col-1">Type of Membership:</div>
				<div class="col-2">{{ membershipDetails.type }}</div>
			</div>
			<div class="row payment">
				<div class="col-1">Payment Method:</div>
				<div class="col-2">{{ membershipDetails.payment }}</div>
			</div>
		</div>

		<div class="main-section" v-else>
			<h1>You have no membership yet, get one now!</h1>
		</div>

		<div class="action">
			<button v-if="membershipDetails" @click="toggleModal">
				edit membership
			</button>
			<button v-else>get a membership</button>
		</div>
	</div>

	<BaseModal :open="openModal" @close-modal="toggleModal">
		<template #header>
			<h1>Edit Membership</h1>
		</template>

		<template #main>
			<form @submit.prevent>
				<div class="card-details modal__section">
					<p>Change Payment Card:</p>
					<div class="input-control">
						<input
							class="input-control__input"
							placeholder="Name on Card"
							type="text"
						/>
					</div>
					<div class="input-control">
						<input
							class="input-control__input"
							placeholder="Card Number"
							maxlength="19"
							type="text"
						/>
					</div>
					<div class="card-details__small-input">
						<div class="input-control">
							<input
								class="input-control__input"
								placeholder="MM/YY"
								type="tel"
								pattern="\d*"
								maxlength="5"
							/>
						</div>
						<div class="input-control">
							<input
								class="input-control__input"
								placeholder="CVC"
								type="text"
								maxlength="3"
							/>
						</div>
					</div>
				</div>

				<div class="modal__section">
					<div class="membership-details">
						<div class="membership-type">
							<p>Change Membership Type:</p>
							<div class="input-control">
								<select class="input-control__select" name="" id="">
									<option value="">Choose an option</option>
									<option value="month" selected>Month</option>
									<option value="">Trimester</option>
									<option value="">Semester</option>
									<option value="">Anual</option>
								</select>
							</div>
						</div>
						<div class="membership-status" :class="membershipDetails.status">
							{{ membershipDetails.status }}
						</div>
					</div>
				</div>

				<div class="history modal__section">
					<p>History:</p>
					<ul>
						<li>Member since: {{ memberSinceDate }}</li>
						<li>Membership expires: {{ memberExpDate }}</li>
					</ul>
				</div>
			</form>
		</template>

		<template #action>
			<button disabled>Save Changes</button>
			<button class="warn">Cancel Membership</button>
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
		};
	},
	methods: {
		dateFormatter(date) {
			const rawDate = new Date(+date);
			const splitDate = rawDate.toUTCString().split(" ").slice(1, 4);
			return splitDate.join("-");
		},
		toggleModal() {
			this.openModal = !this.openModal;
		},
	},
	computed: {
		membershipDetails() {
			return this.$store.getters.getMembership;
		},
		memberSinceDate() {
			if (!this.membershipDetails) return "";
			return this.dateFormatter(this.membershipDetails.member_since);
		},
		memberExpDate() {
			if (!this.membershipDetails) return "";
			return this.dateFormatter(this.membershipDetails.expiry_date);
		},
	},
};
</script>

<style scoped>
.container {
	grid-column: 4 / span 2;

	background-color: #3a3a3a;
	border-radius: 6px;
	box-shadow: 0 0 6px #0000005a;

	font-family: "Russo One", sans-serif;
	color: #fff;

	padding: 1rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	h2 {
		font-size: 1.2rem;
		font-weight: 100;
	}
}
header {
	border-bottom: 1px solid #16161642;
	padding-bottom: 1rem;
}

.main-section {
	text-align: center;
}

.action > button {
	background-color: #e3943435;
	border: 1px solid #e39534;
	border-radius: 8px;
	color: #fff;
	cursor: pointer;

	margin: 5px 0;

	padding: 1rem 5rem;
	width: 100%;
}
.action > button:disabled {
	background-color: #98989835;
	border: 1px solid #989898;
	color: #ffffff70;

	cursor: not-allowed;
}
.action > button.warn {
	background-color: #e3343435;
	border: 1px solid #e33434;
}
.action > button.warn:hover {
	background-color: #ff393935;
	border: 1px solid #f93838;
}
.row {
	display: flex;
	justify-content: space-between;
	align-items: center;

	border-bottom: 1px solid #3f3f3fab;

	padding: 1rem;
}
.row > .col-2 {
	font-family: "Poppins", sans-serif;
	font-size: 10px;
}
.col-2.active,
.membership-status.ACTIVE {
	padding: 5px 10px;
	border-radius: 10px;
	border: 1px solid #6ce334;
	background-color: #6be3345b;
}
.membership-details {
	display: flex;
	align-items: center;
	width: 50%;
	gap: 2rem;
}
.card-details__small-input {
	display: flex;
	gap: 2rem;
	width: 50%;
}
.card-details__small-input > .input-control > input,
.input-control > select {
	width: 100%;
}
form {
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	height: 100%;
	/* align-items: center; */
}
ul {
	padding: 1rem 2rem 0;
}
.history {
	padding-bottom: 10px;
}
</style>
