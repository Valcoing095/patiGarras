import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginview from '../views/loginview.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
   path: '/loginview',
   name: 'loginview',
   component: loginview
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
