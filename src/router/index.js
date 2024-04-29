import { createRouter, createWebHashHistory } from 'vue-router'
import ConfirmationComponentView from '../views/ConfirmationComponentView.vue'
import UsersView from '../views/UsersView.vue'

const routes = [
  {
    path: '/confirmation',
    name: '',
    component: ConfirmationComponentView
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
