<template>
  <section id="signup-wrapper">
    <div class="card">
      <header>
        <h1>Sign up</h1>
      </header>
      <div class="main-section">
        <div class="input-control" v-for="field in fields" :key="field">
          <input
            :class="field.validator.status"
            @blur="validate(field)"
            :type="field.type"
            v-model="field.value"
            :placeholder="field.placeholder"
          />
        </div>
        <button @click="signup">Sign up</button>
      </div>
    </div>
    <div class="errors-wrapper" v-if="errorList.length > 0">
      <ul>
        <li v-for="error in errorList" :key="error">
          <h1>In "{{ error.field }}":</h1>
          <p>{{ error.msg }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

import authMixin from './authMixins.js';

export default {
  mixins: [authMixin],
  data() {},
  methods: {
    async signup() {
      const name = this.fields.firstName.value + " " + this.fields.lastName.value;

      if (this.fields.secret.value !== this.fields.confirmSecret.value) {
        this.errorList.push({
          status: 400,
          msg: "Passwords must match",
          payload: "",
          field: "Passwords",
        });
        this.fields.secret.validator.status = "invalid";
        this.fields.confirmSecret.validator.status = "invalid";
        return;
      }

      const variables = {
        name,
        email: this.fields.email.value,
        secret: this.fields.secret.value,
      };

      const answer = await this.$store.dispatch("signup", variables);

      console.log(answer);

      if (answer.msg === "ok") {
        this.fields.firstName.value = "";
        this.fields.lastName.value = "";
        this.fields.email.value = "";
        this.fields.secret.value = "";
        this.fields.confirmSecret.value = "";

        this.$router.push('/home');
      }
    },
  },
  computed: {},
};
</script>

<style scoped>
.card {
  min-height: 60vh;
  width: 50vw;
  background: rgb(56, 56, 56);
  border-radius: 20px;
}
header {
  height: 6vh;
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
  /* width: calc(100% - 2vw); */
  /* padding: 2vw 5vw; */
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 2vw));
  grid-template-rows: repeat(4, 12vh);
  grid-template-areas:
    "first last"
    "email email"
    "password confirm"
    "action action";
  justify-content: center;
  align-content: center;
}
.input-control {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: "Poppins", sans-serif;
  outline: none;
}
.input-control:nth-child(1) {
  grid-area: first;
}
.input-control:nth-child(2) {
  grid-area: last;
}
.input-control:nth-child(3) {
  grid-area: email;
}
.input-control:nth-child(4) {
  grid-area: password;
}
.input-control:nth-child(5) {
  grid-area: confirm;
}
.input-control input {
  background: transparent;
  border: none;
  margin: 1rem;
  padding: 1vw;
  color: #fff;
  background: #222;
  outline: none;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
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
button {
  margin: 1rem;
  padding: 15px 25px;
  cursor: pointer;
  font-family: "Oswald", sans-serif;
  font-weight: 800;
  background: var(--standard-orange);
  border-radius: 10px;
  border: none;
  grid-area: action;
  place-self: center stretch;
}
button:hover {
  background: #ff9900;
}
#signup-wrapper {
  position: relative;
}
.errors-wrapper {
  font-family: "Poppins", sans-serif;
  position: absolute;
  right: -40%;
  top: 25%;
  z-index: 300;
  padding: 2rem;
  background: rgba(255, 107, 107, 0.65);
  border-radius: 10px;
  max-width: 35%;
}
.errors-wrapper ul li {
  list-style: none;
  text-align: center;
  margin: 0.7rem 0;
}
.errors-wrapper ul li h1 {
  font-size: 1rem;
}
.errors-wrapper ul li p {
  font-size: 0.7rem;
}
</style>
