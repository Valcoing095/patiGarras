<<<<<<< HEAD
import { createRouter, createWebHashHistory } from 'vue-router'
import ConfirmationComponentView from '../views/ConfirmationComponentView.vue'
=======
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import registerview from '../views/registerview.vue'

>>>>>>> 19f8533 (register client)

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
