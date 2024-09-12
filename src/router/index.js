import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  {
    path: '/report',
    name: 'report',
    component: () => import('@/views/ReportView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LogInView.vue')
    
  },

 
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import('@/views/SignUpView.vue')
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('@/views/OrdersView.vue')

  },

  {
    path: '/users',
    name: 'users',
  component: () => import('@/views/UsersView.vue')
  },


  {
    path: '/suppliers',
    name: 'suppliers',
    component: () => import('@/views/SuppliersView.vue')
  },
  {
path: '/items',
name: 'items',
component: () => import('@/views/ItemView.vue')
  },
 {
  path: '/itemDetails/:id',
  name: 'itemDetails',
  component: () => import('@/views/SingleItemView.vue')
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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
