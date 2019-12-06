import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import fastClick from 'fastclick'
import 'common/stylus/index.styl'
fastClick.attach(document.body)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
