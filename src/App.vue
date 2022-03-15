<template>
  <section>
    <main-desktop></main-desktop>
  </section>
</template>

<script>
import MainDesktop from './components/desktop/MainDesktop.vue'

export default {
  name: "App",
  components: {
    MainDesktop
  },
  computed: {
    isMobile() {
      return this.$store.getters.getMobile;
    }
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
  background: #222222;
}

:root {
  --standard-orange: #f09001;
}
</style>
