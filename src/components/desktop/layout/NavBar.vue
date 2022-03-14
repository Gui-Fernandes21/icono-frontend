<template>
  <nav>
    <a href="#" class="logo">icono</a>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Login</a></li>
      <li><a href="#">Sign up</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.logo {
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 4px;
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
  font-family: 'Russo One', sans-serif;
}
ul li a:hover {
  border-bottom: 1px solid var(--standard-orange);
}
</style>
