import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from "../store";

Vue.use(Router)

const router = new Router({
  routes: routes
})

router.beforeEach((to, from, next) => {
  if('requiresAuth' in to.meta) { 
    if(to.meta.requiresAuth && store.getters.isAuthenticated) { 
      next()
    }
    else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  else {
    next()
  }
})

export default router;