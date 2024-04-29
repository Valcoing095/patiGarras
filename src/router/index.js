import { createRouter, createWebHashHistory } from 'vue-router'
import ConfirmationComponentView from '../views/ConfirmationComponentView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ConfirmationComponentView
  },
  {
    path: '/Registrate',
    name: 'Registrate',
    component: registerview
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
