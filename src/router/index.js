import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main.vue'
import ReadQR from '../views/ReadQR.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Main
    },
    {
        path: '/readqr',
        name: 'ReadQR',
        component: ReadQR
    }
  ]
})

export default router;