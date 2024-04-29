import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginview from '../views/loginview.vue'
import registerview from '../views/registerview.vue'


const routes = [
  {
    path: '/',
    name: 'loginview',
    component: loginview
  },{
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
