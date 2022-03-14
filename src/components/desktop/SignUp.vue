<template>
  <section>
    <div class="card">
      <header>
        <h1>Sign up</h1>
      </header>
      <div class="main-section">
        <div class="input-control">
          <label>Name</label>
          <input type="text" v-model="name" />
        </div>
        <div class="input-control">
          <label>Email</label>
          <input type="email" v-model="email" />
        </div>
        <div class="input-control">
          <label>Password</label>
          <input type="password" v-model="secret" />
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
      name: "",
      email: "",
      secret: "",
    };
  },
  methods: {
    async signup() {
      // const variables = {
      //   name: this.name,
      //   email: this.email,
      //   secret: this.secret,
      // };
      const req = `
      mutation {
        createUser(data: {name: "gasd", email: "test@asd.com", secret: "123"}) {
          clearance
          email
        }
      }
      `;

      console.log(req);

      const result = await fetch("http://localhost:4001/graphql", {
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json',
        },
        method: "POST",
        body: req,
      });
      console.log(result);
    },
  },
};
</script>

<style scoped>
.card {
  height: 50vh;
  width: 50vw;
  background: rgb(56, 56, 56);
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}
.input-control {
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: "Poppins", sans-serif;
  outline: none;
}
.input-control label {
  color: #fff;
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
}
button:hover {
  background: #ff9900;
}
</style>
