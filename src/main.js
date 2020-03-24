import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import AUI from "./packages/index";
Vue.use(AUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
