import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/login.vue'
import pesquisa from '../views/pesquisa.vue'
import produto from '../views/PaginaProduto.vue'
import carrinho from '../components/carrinho.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: login
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
    path: '/pesquisa',
    name: 'pesquisa',
    component: pesquisa
  },
  {
    path: '/produto/:produto',
    name: 'Prato',
    component: produto
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: carrinho
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
