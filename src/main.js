import { createApp } from 'vue'
import App from './App.vue'

import store from './store/index.js'
import router from './router/index.js'

import 'normalize.css';
import '@/styles/styles.scss';

import helpers from '@/utils/helper'

const app = createApp(App);

app.use(store);
app.use(router);
app.use(helpers);

app.mount('#app');

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}