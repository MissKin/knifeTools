// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/theme/index.css'
import './assets/icon/iconfont.css'
import App from './App'
import router from './router/index'
import store from './store/index'

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.filter('getParamData', function (value, start, number) {
  // 判断过滤的对象是否为数组对象
  let isArray = Object.prototype.toString.call(value) === '[object Array]'
  if (!isArray) { alert('数据类型不正确,需要对象或数组'); return false }
  // 获取的数量
  let end = start + number
  return value.slice(start, end)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
