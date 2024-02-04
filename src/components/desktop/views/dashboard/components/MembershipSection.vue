<template>
	<div class="container">
		<header>
			<h2>Membership</h2>
		</header>

		<div class="main-section">
			<div class="row since"></div>
			<div class="row type"></div>
			<div class="row status"></div>
			<div class="row expiration"></div>
			<div class="row payment"></div>
		</div>

		<div class="action">
			<button>edit membership</button>
		</div>
	</div>
</template>

<script>
export default {
  methods: {
    init() {
      this.$store.dispatch('getMembership');
    }
  },
  beforeMount() {
    this.init();
  }
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

	h2 {
		font-size: 1.2rem;
		font-weight: 100;
	}
}
header {
	border-bottom: 1px solid #16161642;
	padding-bottom: 1rem;
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
</style>
