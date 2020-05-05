import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Inventory from '../views/Inventory'
import Dashboard from '../views/Dashboard'
import Costumers from '../views/Costumers.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Default',
    component: Home
  },
  {
  path: '/home',
  name: 'Home',
  component: Home
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/costumers',
    name: 'Costumers',
    component: Costumers
  }
]

const router = new VueRouter({
  routes
})

export default router
