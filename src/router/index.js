import { createRouter, createWebHistory } from 'vue-router'
import searchView from '../components/searchView.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Instruction from '../components/Instructions.vue'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/searchview',
    name: 'searchview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: searchView
  },
  {
    path: '/instructions',
    name: 'Instructions',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Instruction
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
