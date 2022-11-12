import { createRouter, createWebHistory } from 'vue-router'
import Top from '../views/Top.vue';

// deviceのimport
import login from "../views/Login.vue";
import signup from "../views/Signup.vue";

const routes = [
  {
    path: '/',
    name: 'top',
    component: Top
  },

  {
    path: '/about',
    name: 'about',
    meta: { title: 'Description'}
  },
  //deviceのroutes
  {
    path: '/login',
    name: 'Login',
    meta: { title: 'Login'},
    component: login
  },
  {
    path: '/signup',
    name: 'Signup',
    meta: { title: 'Signup'},
    component: signup
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
