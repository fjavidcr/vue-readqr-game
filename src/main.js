import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'papercss/dist/paper.min.css'
import "./assets/css/app.css"

import VueQrcodeReader from "vue-qrcode-reader"
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueQrcodeReader)
Vue.use(VueRouter)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
