import Vue from 'vue'
import App from './App'
// 如果是引入一个目录下index.js文件 只要写到目录 默认引入的是index.js
import router from './router'

Vue.config.productionTip = false

// 在Vue原型中定义test方法
Vue.prototype.test=function () {
  console.log('test')
}
Vue.prototype.name='vue'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

console.log(router)
