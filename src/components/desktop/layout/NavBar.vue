<template>
  <nav>
    <a href="/home" class="logo">icono</a>
    <ul>
      <li>
        <router-link :to="'/home'" active-class="active">Home</router-link>
      </li>
      <li>
        <router-link :to="'/login'" active-class="active">Login</router-link>
      </li>
      <li>
        <router-link :to="'/signup'" active-class="active">Sign up</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.logo {
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 4px;
  user-select: none;
}
nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vh;
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
  justify-content: space-between;
}
ul li {
  list-style: none;
}
ul li a {
  font-weight: 200;
  font-size: 13px;
  font-family: "Russo One", sans-serif;
  user-select: none;
}
ul li a:hover,
ul li a.active {
  border-bottom: 1px solid var(--standard-orange);
}
</style>
