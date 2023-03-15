import Vue from 'vue'
import './style.css'
import App from './App.vue'
import pinia from './store'
import router from './router'

Vue.config.productionTip = false
new Vue({
  router,
  pinia,
  render: h => h(App),  // 通过render进行渲染
}).$mount('#app')
