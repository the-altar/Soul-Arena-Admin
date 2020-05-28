import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import charControl from "@/mixin/charControl"
import "./assets/css/custom.scss"

Vue.mixin(charControl)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
