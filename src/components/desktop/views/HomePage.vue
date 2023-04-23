<template>
  <section>
    <header>
      <h3>Welcome to</h3>
      <h1>ICONO</h1>
    </header>
    <div class="actions">
      <router-link :to="'/signup'">Sign up</router-link>
      <router-link :to="'/login'">Login</router-link>
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
.actions a {
  margin: 2vw 1vw;
  text-decoration: none;
  color: $base-orange;
  padding: 0.5vw 2vw;
  border: 1px solid $base-orange;
  font-family: 'Poppins';
  font-size: 0.8vw;
}
.actions a:hover {
  background: $base-orange;
  color: #222;
}
</style>
