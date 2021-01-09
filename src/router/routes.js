import Main from '../views/Main.vue'
import ReadQR from '../views/ReadQR.vue'


export default [
    {
      path: '/',
      name: 'Home',
      component: Main
    },
    {
        path: '/readqr',
        name: 'ReadQR',
        meta: { requiresAuth: true },
        component: ReadQR
    },
    {
        path: '/login',
        name: 'Login',
        component: ReadQR
    }
]