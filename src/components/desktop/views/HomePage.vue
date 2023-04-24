<template>
  <section>
    <header>
      <h3>Welcome to</h3>
      <h1>ICONO</h1>
    </header>
    <div class="actions">
      <router-link class="small-button" :to="'/signup'">Sign up</router-link>
      <router-link class="small-button" :to="'/login'">Login</router-link>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/styles/base/settings';
section {
  max-width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $base-orange;
}
section h1 {
  font-size: 5vw;
  letter-spacing: 8px;
  font-weight: 700;
  font-family: "Russo one", sans-serif;
  text-align: center;
}
section h3 {
  font-family: "Poppins", sans-serif;
  font-size: 1vw;
  text-align: center;
}
.actions{
  margin: 1vw 0;
}
</style>
