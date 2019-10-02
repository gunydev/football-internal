import Vue from 'vue';
import Router from 'vue-router';

import * as firebase from 'firebase/app';
import 'firebase/firebase-auth';

import Home from './views/Home.vue';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home,
      redirect: 'register'
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Register.vue')
    },
    {
      path: '/info',
      name: 'info',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Info.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/admin/Login.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/admin/Dashboard.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('login')
  // if already login but go to login page
  else if (to.name === 'login' && currentUser) next('admin')
  else next()
})

export default router
