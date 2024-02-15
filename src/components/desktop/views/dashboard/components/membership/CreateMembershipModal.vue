<template>
	<BaseModal :open="openModal" @close-modal="closeModal">
		<template #header>
			<h1>Get a Membership</h1>
		</template>

		<template #main>
			<form @submit.prevent>
				
				<div class="modal__section">
					<div class="membership-details">
						<div>
							<p>Choose Membership Type:</p>
							<div class="input-control">
								<select
									class="input-control__select"
									@input="setType"
									name="type"
									id="createMemType"
								>
									<option value="" selected>Choose an option</option>
									<option value="month">Month</option>
									<option value="trimester">Trimester</option>
									<option value="semester">Semester</option>
									<option value="annual">Annual</option>
								</select>
							</div>
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
									<option value="month">Card</option>
									<option value="cash">Cash</option>
									<option value="bank">Bank Transfer</option>
								</select>
							</div>
						</div>
					</div>
				</div>

				<!-- <div class="history modal__section">
					<p>History:</p>
					<ul>
						<li>Member since: {{ memberSinceDate }}</li>
						<li>Membership expires: {{ memberExpDate }}</li>
					</ul>
				</div> -->
			</form>
		</template>

		<template #action>
			<button class="primary-btn" :disabled="isDisabled" @click="subscribe">
				Subscribe
			</button>
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
	data() {
		return {
			type: "",
			pay: "",
		};
	},
	methods: {
		dateFormatter(date) {
			const rawDate = new Date(+date);
			const splitDate = rawDate.toUTCString().split(" ").slice(1, 4);
			return splitDate.join("-");
		},
		closeModal() {
			this.$emit("close-modal");
		},
		setType(target) {
			this.type = target.target.value;
		},
		setPay(target) {
			this.pay = target.target.value;
		},
		subscribe() {},
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
		isDisabled() {
			if (this.type) return false;
			if (this.pay) return false;
			return true;
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
