import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Servicios.vue')
  },
  {
    path: '/content',
    name: 'Contenido',
    component: () => import(/* webpackChunkName: "about" */ '../views/Content.vue')
  },
  {
    path: '/cementerio',
    name: 'Cementerio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cementerio.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
