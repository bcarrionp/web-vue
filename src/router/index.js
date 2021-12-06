import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import contentMuisic from '@/components/contentMuisic'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:cardid',
    name: 'contentMuisic',
    component: contentMuisic
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({

  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
