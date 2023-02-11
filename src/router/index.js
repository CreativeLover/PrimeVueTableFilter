import { createRouter, createWebHistory } from 'vue-router'
import DataTableFilterDemo from '../components/DataTableFilterDemo.vue'

const routes = [
  {
    path: '/',
    name: 'DataTableFilterDemo',
    component: DataTableFilterDemo,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
