import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import AuthLayout from './layouts/Auth'
import ChatLayout from './layouts/Chat'
import TheBaseDialog from './components/TheBaseDialog'

Vue.config.productionTip = false

Vue.component('AuthLayout', AuthLayout)
Vue.component('ChatLayout', ChatLayout)
Vue.component('TheBaseDialog', TheBaseDialog)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
