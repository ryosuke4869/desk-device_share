import { createRouter, createWebHistory } from 'vue-router'
import Top from '../views/Top.vue';

// deviceのimport
import login from "../views/Login.vue";
import signup from "../views/Signup.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Top
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  //deviceのroutes
  {
    path: '/login',
    name: 'Login',
    component: login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: signup
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
