// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
// export default new VueRouter({

// })

import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/layout'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '@/views/home')
      },
      {
        path: '/categroy/:id',
        name: '/categroy',
        component: () => { /* webpackChunkName: "about" */ '@/views/categroy' }
      }
    ]
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import(/* webpackChunkName: "about" */ '@/views/product')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
