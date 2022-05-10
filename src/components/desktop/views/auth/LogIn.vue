<template>
  <section>
    <div class="card">
      <header>
        <h1>Login</h1>
      </header>
      <div class="main-section">
        <div class="input-control">
          <input
            :class="fields.email.validator.status"
            :type="fields.email.type"
            v-model="fields.email.value"
            :placeholder="fields.email.placeholder"
          />
        </div>
        <div class="input-control">
          <input
            :class="fields.secret.validator.status"
            :type="fields.secret.type"
            v-model="fields.secret.value"
            :placeholder="fields.secret.placeholder"
          />
        </div>
        <button @click="login">Login</button>
      </div>
    </div>
  </section>
</template>

<script>
import authMixin from "./authMixins.js";

export default {
  mixins: [authMixin],
  data() {},
  methods: {
    async login() {
      const variables = {
        email: this.fields.email.value,
        secret: this.fields.secret.value,
      };

      const answer = await this.$store.dispatch("login", variables);
    
      if (answer.msg === "ok") {
        this.fields.email.value = "";
        this.fields.secret.value = "";

        this.$router.push('/home');
      }
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
  font-size: 18px;
}
button {
  margin: 1rem 0;
  padding: 17px 25px;
  font-size: 16px;
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
.input-control input::placeholder {
  font-family: "Poppins", sans-serif;
}
.input-control input.invalid {
  border-bottom: 1px solid red;
}
.input-control input.valid {
  border-bottom: 1px solid greenyellow;
}
</style>
