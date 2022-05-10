<template>
  <nav>
    <a href="/home" class="logo">icono</a>
    <ul>
      <li>
        <router-link :to="'/home'" active-class="active">Home</router-link>
      </li>
      <li v-if="!auth">
        <router-link :to="'/login'" active-class="active">Login</router-link>
      </li>
      <li v-if="!auth">
        <router-link :to="'/signup'" active-class="active">Sign up</router-link>
      </li>
      <li v-if="auth">
        <a active-class="active" @click="logout">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    auth() {
      return this.$store.getters.isAuth;
    }
  },
  methods: {
    logout() {
      
    }
  }
}
</script>

<style scoped>
.logo {
  text-transform: uppercase;
  font-size: 3vh;
  font-weight: bold;
  letter-spacing: 4px;
  user-select: none;
  font-family: 'Russo One', sans-serif;
}
nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 6vh;
  background: #000;
}
a {
  color: var(--standard-orange);
  text-decoration: none;
  font-family: "Poppins", sans-serif;
}
ul {
  display: flex;
  width: 15%;
}
ul li {
  list-style: none;
  margin: 0 1.5rem;
}
ul li a {
  font-weight: 200;
  font-size: 13px;
  font-family: "Russo One", sans-serif;
  user-select: none;
  font-size: 1.4vh;
  cursor: pointer;
}
ul li a:hover,
ul li a.active {
  border-bottom: 1px solid var(--standard-orange);
}
</style>
