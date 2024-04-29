import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import registerview from '../views/registerview.vue'


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
