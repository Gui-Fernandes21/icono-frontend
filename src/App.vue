<template>
	<section>
		<main-desktop v-if="!isMobile"></main-desktop>
		<main-mobile v-else></main-mobile>
	</section>
</template>

<script>
import MainDesktop from "./components/desktop/MainDesktop.vue";
import MainMobile from "./components/mobile/MainMobile.vue";

export default {
	name: "App",
	components: {
		MainDesktop,
		MainMobile,
	},
	data() {
		return {
			isMobile: this.$store.getters.getMobile,
		};
	},
	beforeCreate() {
		this.$store.dispatch("checkMobile");
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Russo+One&display=swap");
@import '@/styles/styles.scss';
</style>
