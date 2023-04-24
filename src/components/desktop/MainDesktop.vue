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
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 95vh;

  margin-bottom: 1500px;
}
</style>