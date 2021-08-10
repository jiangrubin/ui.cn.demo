import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    component: Home,
    children: []
  },
  {
    path: '/exp',
    name: 'Exp',
    component: () => import(/* webpackChunkName: "exp" */ '../views/exp')
  },
  {
    path: '/ins',
    name: 'Ins',
    component: () => import(/* webpackChunkName: "ins" */ '../views/ins')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "message" */ '../views/message')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import(/* webpackChunkName: "mine" */ '../views/mine')
  }
]

const router = new VueRouter({
  routes
})

export default router
