<template>
  <section>
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
        <button @click="test">Sign up</button>
      </div>
    </div>
  </section>
</template>

<script>
import {
  nameFieldValidator,
  passwordValidator,
  emailValidator,
} from "../../../../utils/validators.js";

export default {
  data() {
    return {
      fields: {
        firstName: {
          value: "",
          type: 'text',
          placeholder: 'First Name',
          validator: {
            field: "name",
            status: "",
          },
        },
        lastName: {
          value: "",
          type: 'text',
          placeholder: 'Last Name',
          validator: {
            field: "name",
            status: "",
          },
        },
        email: {
          value: "",
          type: 'email',
          placeholder: 'Email',
          validator: {
            field: "email",
            status: "",
          },
        },
        secret: {
          value: "",
          type: 'password',
          placeholder: 'Password',
          validator: {
            field: "password",
            status: "",
          },
        },
        confirmSecret: {
          value: "",
          type: 'password',
          placeholder: 'Confirm Password',
          validator: {
            field: "password",
            status: "",
          },
        },
      },
    };
  },
  methods: {
    validate(field) {
      if (field.validator.field === "name") {
        field.validator.status = nameFieldValidator(field.value);
      }
      if (field.validator.field === "password") {
        field.validator.status = passwordValidator(field.value);
      }
      if (field.validator.field === "email") {
        field.validator.status = emailValidator(field.value);
      }
    },
    async signup() {
      const name = this.firstName + " " + this.lastName;

      if (this.secret !== this.confirmSecret) {
        return console.log("Passwords do not match!");
      }

      const variables = {
        name,
        email: this.email,
        secret: this.secret,
      };

      const answer = await this.$store.dispatch("signup", variables);

      console.log(answer);

      if (answer.msg === "ok") {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.secret = "";
        this.confirmSecret = "";
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
</style>
