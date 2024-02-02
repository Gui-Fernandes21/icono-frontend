<template>
  <section>
    <nav-bar></nav-bar>
    <main>
      <router-view></router-view>
    </main>
  </section>
</template>

<script>
import NavBar from "./layout/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
section {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	min-height: 100vh;
}
main {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>