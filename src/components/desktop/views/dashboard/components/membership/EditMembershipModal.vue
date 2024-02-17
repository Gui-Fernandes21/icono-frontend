<template>
	<BaseModal :open="openModal" @close-modal="closeModal">
		<template #header>
			<h1>Edit Membership</h1>
		</template>

		<template #main>
			<form @submit.prevent>
				<!-- <div class="card-details modal__section">
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
 -->
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
									<option value="">Annual</option>
								</select>
							</div>
						</div>
						<div class="membership-status" :class="membershipDetails.status">
							{{ membershipDetails.status }}
						</div>
					</div>
				</div>

				<div class="modal__section">
					<div class="membership-details">
						<div>
							<p>Payment Type:</p>
							<div class="input-control">
								<select
									class="input-control__select"
									@input="setPay"
									name="pay"
									id="createMemPay"
								>
									<option value="" selected>Choose an option</option>
									<option value="MONTH">Card</option>
									<option value="CASH">Cash</option>
									<option value="BANK">Bank Transfer</option>
								</select>
							</div>
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
			<button class="primary-btn" disabled>Save Changes</button>
			<button class="primary-btn warn">Cancel Membership</button>
		</template>
	</BaseModal>
</template>

<script>
import BaseModal from "@/components/desktop/layout/BaseModal.vue";

export default {
	emits: ["close-modal"],
	props: {
		openModal: {
			type: Boolean,
			required: true,
		},
	},
	components: {
		BaseModal,
	},
	methods: {
		closeModal() {
			this.$emit("close-modal");
		},
	},
	computed: {
		membershipDetails() {
			return this.$store.getters.getMembership;
		},
		memberSinceDate() {
			if (!this.membershipDetails) return "";
			return this.$helpers.dateFormatter(this.membershipDetails.member_since);
		},
		memberExpDate() {
			if (!this.membershipDetails) return "";
			return this.$helpers.dateFormatter(this.membershipDetails.expiry_date);
		},
	},
};
</script>

<style scoped>
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
.col-2.active,
.membership-status.ACTIVE {
	padding: 5px 10px;
	border-radius: 10px;
	border: 1px solid #6ce334;
	background-color: #6be3345b;
}
form {
	display: flex;
	flex-direction: column;
	/* justify-content: space-between; */
	justify-content: flex-start;

	height: 100%;
}
ul {
	padding: 1rem 2rem 0;
}
.history {
	padding-bottom: 10px;
}
</style>
