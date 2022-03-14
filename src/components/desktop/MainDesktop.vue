<template>
  <section>
    <nav-bar></nav-bar>
    <main>
      <sign-up></sign-up>
    </main>
  </section>
</template>

<script>
import NavBar from "./layout/NavBar.vue";
import SignUp from "./SignUp.vue";

export default {
  components: {
    NavBar,
    SignUp,
  },
};
</script>

<style scoped>
main {
  display: grid;
  place-items: center;
  min-height: 95vh;
}
</style>