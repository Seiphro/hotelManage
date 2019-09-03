// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './routers'
import ajax from '@/assets/js/AxiosPlugin'
import store from './stores'
// 使用mock时，将引入mock，取消注释
import './mocks/mock'

import axios from '../node_modules/axios'  // 引入axios

// // jquery
import './assets/jquery/jquery.min.js'
import './assets/jquery.cookie/jquery.cookie.js'
import './assets/jquery-validation/jquery.validate.min.js'
import './assets/popper.js/umd/popper.min.js'
import './assets/chart.js/Chart.min.js'

// 引入boostrap
// import './assets/bootstrap/css/bootstrap.min.css'
// import './assets/bootstrap/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

// // font-awesome
// import './assets/font-awesome/css/font-awesome.css'

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
axios.defaults.headers.post['Content-Type'] = 'application/json'

// mock 启动

// if (/localhost/.test(location.href)) {
//   require('@/mocks/mock')
// }

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
