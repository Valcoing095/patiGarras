import { createRouter, createWebHistory } from 'vue-router'
import loginview from '../views/loginview.vue'
import registerview from '../views/registerview.vue'
import UsersView from '../views/UsersView.vue'

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
  {
    path: '/users',
    name: 'UsersView',
    component: UsersView

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
