<template>
	<BaseModal :open="openModal" @close-modal="closeModal">
		<template #header>
			<h1>Get a Membership</h1>
		</template>

		<template #main>
			<form @submit.prevent>
				<div class="modal__section">
					<div class="academy-details">
						<div>
							<p>Academy:</p>
							<AutoComplete v-model="test" :source="academies"></AutoComplete>
						</div>
					</div>
				</div>

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
									<option value="MONTH">Month</option>
									<option value="TRIMESTER">Trimester</option>
									<option value="SEMESTER">Semester</option>
									<option value="ANUAL">Annual</option>
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
									<option value="MONTH">Card</option>
									<option value="CASH">Cash</option>
									<option value="BANK">Bank Transfer</option>
								</select>
							</div>
						</div>
					</div>
				</div>
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
import AutoComplete from "@/components/desktop/ui/AutoComplete.vue";

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
		AutoComplete,
	},
	data() {
		return {
			type: "",
			pay: "",
			test: {}
		};
	},
	beforeMount() {
		this.getAcademies();
	},
	methods: {
		closeModal() {
			this.$emit("close-modal");
		},
		setType(target) {
			this.type = target.target.value;
		},
		setPay(target) {
			this.pay = target.target.value;
		},
		getAcademies() {
			this.$store.dispatch('getAcademiesCombo');
		},
		subscribe() {
			const payload = {
				data: {
					userId: this.$store.getters.getUserId,
					type: this.type,
					payment: this.pay,
				},
			};
			this.$store
				.dispatch("createMembership", payload)
				.then(() => this.$emit("close-modal"))
				.catch((err) => console.log(err));
		},
	},
	computed: {
		isDisabled() {
			if (this.type) return false;
			if (this.pay) return false;
			if (this.academies.filter(acad => acad.id == this.test.id)[0]) return false;
			return true;
		},
		academies() {
			return this.$store.getters.getAcademies;
		}
	},
	watch: {
		// test(val) {
		// 	console.log(val);
		// } 
	}
};
</script>

<style scoped>
.membership-details {
	display: flex;
	align-items: center;
	/* width: 50%; */
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
