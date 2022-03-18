<template>
  <section>
    <div class="card">
      <header>
        <h1>Login</h1>
      </header>
      <div class="main-section">
        <div class="input-control">
          <input type="email" v-model="email" placeholder="Email" />
        </div>
        <div class="input-control">
          <input type="password" v-model="secret" placeholder="Password" />
        </div>
        <button @click="login">Login</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      secret: "",
    };
  },
  methods: {
    async login() {
      const variables = {
        email: this.email,
        secret: this.secret,
      };

      this.$store.dispatch("login", variables);
    },
  },
};
</script>

<style scoped>
.card {
  min-height: 60vh;
  width: 50vw;
  background: #383838;
  border-radius: 20px;
}
header {
  height: 4rem;
  width: 100%;
  background: var(--standard-orange);
  display: flex;
  align-items: center;
  font-family: "Oswald", sans-serif;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
header h1 {
  text-transform: uppercase;
  font-weight: 900;
  font-size: 1.5rem;
  margin: 1rem;
  letter-spacing: 2px;
}
.main-section {
  height: 54vh;
  display: grid;
  grid-template-columns: 22vw;
  grid-template-rows: repeat(3, 12vh);
  justify-content: center;
  align-content: center;
}
.input-control {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  outline: none;
}
.input-control input {
  background: transparent;
  border: none;
  margin: 1rem;
  padding: 1vw;
  color: #fff;
  font-family: "Poppins", sans-serif;
  background: #222;
  outline: none;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
}
button {
  margin: 1rem 0;
  padding: 15px 25px;
  cursor: pointer;
  font-family: "Oswald", sans-serif;
  font-weight: 800;
  background: var(--standard-orange);
  border-radius: 10px;
  border: none;
  place-self: center stretch;
}
button:hover {
  background: #ff9900;
}
</style>
