import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  routes: routes
})

router.beforeEach((to, from, next) => {
  if('requiresAuth' in to.meta) { 
    if(to.meta.requiresAuth && store.state.session.authenticated) { 
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