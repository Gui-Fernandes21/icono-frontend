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
main {
  display: grid;
  place-items: center;
  min-height: 95vh;
}
</style>