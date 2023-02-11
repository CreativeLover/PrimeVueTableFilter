import { createRouter, createWebHistory } from 'vue-router'
import CreateList from '../components/Favourite.vue'

const routes = [
  {
    path: '/',
    name: 'CreateList',
    component: CreateList,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
