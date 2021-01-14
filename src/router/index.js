import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import ReadQR from '@/views/ReadQR.vue'
import Account from '@/components/account'
import Login from '@/components/Login'
import store from '../store'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/readqr',
      name: 'ReadQR',
      meta: { requiresAuth: true },
      component: ReadQR,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: ifNotAuthenticated
    }
  ]
})
