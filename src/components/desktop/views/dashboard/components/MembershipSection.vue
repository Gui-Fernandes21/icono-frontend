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
			<div class="row type">
				<div class="col-1">Type of Membership:</div>
				<div class="col-2">{{ membershipDetails.type }}</div>
			</div>
			<div class="row status">
				<div class="col-1">Status:</div>
				<div class="col-2">{{ membershipDetails.status }}</div>
			</div>
			<div class="row expiration">
				<div class="col-1">Membership Expires:</div>
				<div class="col-2">{{ memberExpDate }}</div>
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
			<button v-if="membershipDetails">edit membership</button>
			<button v-else>get a membership</button>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		dateFormatter(date) {
			const rawDate = new Date(+date);
			const splitDate = rawDate.toUTCString().split(" ").slice(1, 4);
			return splitDate.join("-");
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
		}
	},
};
</script>

<style scoped>
.container {
	grid-column: 4 / span 2;

	background-color: #464646;
	border-radius: 6px;

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

	padding: 1rem 5rem;
	width: 100%;
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
</style>
