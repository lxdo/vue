import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log(App)
/*
runtime-only 组件中的template都被vue-template-compiler解析成render函数
 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App) // 箭头函数
  /*
  等价于
  render:function (h){
    return h(App)
  }
   */

})

/*
runtime-only和runtime-compiler区别在main.js
runtime-compiler页面渲染流程
 template--解析-->ast(抽象语法树)--编译-->render函数--转成-->virtual dom---->真实DOM----->UI页面
runtime-only 页面渲染流程
 render函数--转成-->virtual dom---->真实DOM----->UI页面

runtime-only 1.性能更高 2.代码量更少
开发时创建项目选择runtime-only


https://www.bilibili.com/video/BV15741177Eh?p=96

*/
