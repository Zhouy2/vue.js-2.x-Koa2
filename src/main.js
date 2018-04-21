// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 不推荐全局引入vant
// import Vant from 'vant'
// import 'vant/lib/vant-css/index.css'
// Vue.use(Vant)

// 按需引入vant中的组件
import {Button, Row, Col} from 'vant'

Vue.use(Button).use(Row).use(Col)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
