<template>
  <section>
    <div class="card">
      <header>
        <h1>Sign up</h1>
      </header>
      <div class="main-section">
        <div class="input-control">
          <input type="text" v-model="firstName" placeholder="First Name"/>
        </div>
        <div class="input-control">
          <input type="text" v-model="lastName" placeholder="Last Name"/>
        </div>
        <div class="input-control">
          <input type="email" v-model="email" placeholder="Email" />
        </div>
        <div class="input-control">
          <input type="password" v-model="secret" placeholder="Password"/>
        </div>
        <div class="input-control">
          <input type="password" v-model="confirmSecret" placeholder="Confirm Password"/>
        </div>
        <button @click="signup">Sign up</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      secret: "",
      confirmSecret: ""
    };
  },
  methods: {
    signup() {
      const variables = {
        name: this.name,
        email: this.email,
        secret: this.secret,
      };

      this.$store.dispatch("signup", variables);
    },
  },
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
  padding: 2vw 4vw;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(4, 12vh);
  grid-template-areas: 
    "first last"
    "email email"
    "password confirm"
    "action action";
  justify-content: stretch;
  align-content: center;
}
.input-control {
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
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
  border-bottom: 1px solid lightblue;
  margin: 1rem;
  padding: 5px;
  color: #fff;
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
  grid-area: action;
  place-self: center stretch;
}
button:hover {
  background: #ff9900;
}
</style>
