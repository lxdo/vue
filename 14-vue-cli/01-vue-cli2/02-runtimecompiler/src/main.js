import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// 定义组件
const cpn = {
  template:'<div>{{message}}</div>',
  data(){
    return {
      message:'我是组件message'
    }
  }
}
new Vue({
  el: '#app',
  components: {App}, // 注册组件
  template: '<App/>',
  // 上面的components和template可以用下面reader函数替代
  /*
    reader(createElement){
    }
    createElement是内部函数  用于创建元素 名称可以自定义
  */
  render (createElement) {
    // createElement 用法
    /*
      1.普通用法: createElement('标签',{标签属性名:'标签属性值'},['标签中的内容'])
      参数1.需要创建的标签  这里创建的标签会替换el挂载的标签
      参数2.标签的属性  对象{}  可选参数
      参数3.标签中的内容 数组[]  可选参数
     */
    /*
    return createElement('h2', // 需要创建的标签
      {class: 'box'}, // 标签的属性
      ['hello world', createElement('button', ['按钮'])]) // 标签中的内容 里面可以嵌套createElement
     */
    // 2.传入组件对象用法
    // return createElement(cpn) // 组件内容会替换el挂载的标签
    return createElement(App) // 传入App组件对象

  }
})
