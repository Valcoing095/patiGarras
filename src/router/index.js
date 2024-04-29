import { createRouter, createWebHistory } from 'vue-router'
import registerview from '../views/registerview.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: ConfirmationComponentView
  },
  {
    path: '/registrate',
    name: 'registrate',
    component: registerview
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
