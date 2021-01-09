import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'papercss/dist/paper.min.css'
import "./assets/css/app.css"

import VueQrcodeReader from "vue-qrcode-reader"
import VueRouter from 'vue-router'

Vue.use(VueQrcodeReader)
Vue.use(VueRouter)
const router = new VueRouter()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
