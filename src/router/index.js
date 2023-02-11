import { createRouter, createWebHistory } from 'vue-router'
import CustomerService from '../components/DataTableFilterDemo.vue'

const routes = [
  {
    path: '/',
    name: 'CustomerService',
    component: CustomerService,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
