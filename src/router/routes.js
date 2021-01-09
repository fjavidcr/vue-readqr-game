import Main from '../views/Main.vue'
import ReadQR from '../views/ReadQR.vue'
import Login from '../components/Login.vue'


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
        component: Login
    }
]