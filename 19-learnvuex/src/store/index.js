// Vuex使用 管理多个组件都可能用到的状态(变量)
// 安装 npm install vuex --save

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

// 1.安装插件
Vue.use(Vuex)
const state = {
  count:1009,
  students:[
    {id:110,name:'why',age:18},
    {id:111,name:'kobe',age:24},
    {id:112,name:'james',age:30},
    {id:113,name:'curry',age:10},
  ],
  info:{
    name:'jack',
    age:22
  }
}
// 2.创建对象
const store = new Vuex.Store({
  // 保存共有变量 定义到state的变量都是响应式的
  state,
  // 同步修改state里变量
  mutations,
  // 异步操作 发送网络请求
  actions,
  // 相当于计算属性 在这里对state里字段进行处理
  getters,
  modules:{
    a:moduleA
  }
})

// 3.导出store
export default store

// es6语法 对象的解构
const obj = {
  name:'why',
  height:1.88,
  age:10
}
// 对象的解构 把obj中的name、age、height一次性取出来
const {name,age,height}=obj 
console.log(name,age,height)