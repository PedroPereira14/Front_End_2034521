import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import users from '../views/users.vue'
import RacasView from '../views/RacasView.vue'
import cao from '../views/CaoView.vue'
import login from '../views/LoginVue.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/user',
    name: 'user',
    component: users
  },
  {
    path: '/racas',
    name: 'racas',
    component: RacasView
  },
  {
    path: '/racas/:id',
    component: cao
  },
  {
    path: '/login',
    component: login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
