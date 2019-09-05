// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './routers'
import ajax from '@/assets/js/AxiosPlugin'
import store from './stores'
import VueCookies from 'vue-cookies'

// 使用mock时，将引入mock，取消注释
import './mocks/mock'

// 引入axios
import axios from '../node_modules/axios'

// 引入boostrap
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

// 引入echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
axios.defaults.headers.post['Content-Type'] = 'application/json'

// mock 启动
// if (/localhost/.test(location.href)) {
//   require('@/mocks/mock')
// }

Vue.use(VueCookies)
Vue.use(ElementUI)
Vue.use(ajax)

Vue.config.productionTip = false

// axios 统一配置
// ajax.init()

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
