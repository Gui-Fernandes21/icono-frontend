<template>
	<section id="dash-container">
    <div>
      hahahah
    </div>
  </section>
</template>

<script>
export default {
  beforeMount() {
    if(!this.$store.getters.isAuth) this.$router.replace('/home');
  }
}
</script>