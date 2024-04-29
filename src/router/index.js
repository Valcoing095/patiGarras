import { createRouter, createWebHashHistory } from 'vue-router'
<<<<<<< HEAD
import HomeView from '../views/HomeView.vue'
import loginview from '../views/loginview.vue'
=======
import ConfirmationComponentView from '../views/ConfirmationComponentView.vue'
>>>>>>> 909de80224b3cb0537410e73dc8ee10d993c6158

const routes = [
  {
    path: '/',
    name: 'home',
    component: ConfirmationComponentView
  },
  {
<<<<<<< HEAD
   path: '/loginview',
   name: 'loginview',
   component: loginview
=======
    path: '/Registrate',
    name: 'Registrate',
    component: registerview
>>>>>>> 909de80224b3cb0537410e73dc8ee10d993c6158
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
