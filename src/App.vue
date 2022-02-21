<template>
  <section>
    <nav-bar></nav-bar>
  </section>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Russo+One&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: black;
}
</style>
