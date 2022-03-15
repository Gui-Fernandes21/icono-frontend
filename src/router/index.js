import { createRouter, createWebHistory } from "vue-router";

import SignupComponent from "../components/desktop/views/auth/SignUp.vue";
import LoginComponent from "../components/desktop/views/auth/LogIn.vue";
import HomeComponent from "../components/desktop/views/HomePage.vue";

const routes = [
  { path: "/", redirect: '/home' },
  { path: "/signup", name: "sign up", component: SignupComponent },
  { path: "/login", name: "login", component: LoginComponent },
  { path: "/home", name: "home", component: HomeComponent },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
