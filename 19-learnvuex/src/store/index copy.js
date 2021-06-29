// Vuex使用 管理多个组件都可能用到的状态(变量)
// 安装 npm install vuex --save

import Vue from 'vue'
import Vuex from 'vuex'

// 导入mutation常量
import {
  DECREMENT
} from './mutations-types'

// 定义store modules中的vuex数据
const moduleA={
  state:{
    name:'zhangsan',
  },
  mutations:{
    // 各个模板的mutation方法不要重复
    updateName(state,payload){
      state.name=payload
    }
  },
  actions:{
    aUpdateName(context){ // context是上下文的意思 这里context是moduleA对象
      setTimeout(() => {
        console.log(context) // 在模块中的context可以获取根的state和getters
        context.commit('updateName','xiaozhang')
      }, 1000);
    }
  },
  getters:{
    // 各个模板的getters方法不要重复
    fullName(state){
      return state.name+'hhh'
    },
    fullName2(state,getters){ 
      return getters.fullName+'www'
    },
    fullName3(state,getters,rootState){  // state变量  getters方法  rootState:store对象中根的state
      return getters.fullName2+rootState.count
    }
  }
}
// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  // 保存共有变量 定义到state的变量都是响应式的
  state:{
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
  },
  // 同步修改state里变量
  mutations:{ // 定义方法  方法分为两部分 type(事件类型)  事件回调
    // type:increment   事件回调:(state){}  
    increment(state){ // 事件回调  默认有state参数 是state里的数据
      state.count++
    },
    [DECREMENT](state){ //  mutation常量 type为mutations-types.js常量 
      state.count--
    },
    // mutation两种提交风格接收参数的差异
    incrementCount(state,count){ // mutations中方法接收参数
      console.log(count) // 普通提交风格 5  
      state.count+=count
    },
    decrementCount(state,payload){
      console.log(payload) // 特殊提交风格 {type: "decrementCount", count: 5}
      state.count-=payload.count
    },
    addStu(state,stu){  // 接收参数   参数被称为是mutation的载荷(payload) 
      state.students.push(stu)
    },
    updateInfo(state){
      console.log('vuex mutations',state)
      // 给info修改属性 自动响应式
      state.info.name="tom"  // 修改在state定义的变量或属性都是响应式的
      // 给info新增属性 实现响应式
      Vue.set(state.info,'addr','nanjing') // addr未在state定义,通过vue.set给info增加addr属性 可以实现响应式
      console.log(state.info)
      // 给info删除属性 实现响应式
      Vue.delete(state.info,'age')
      
    }

  },
  // 异步操作 发送网络请求
  actions:{
    actionUpdateInfo(context,payload){ // 默认有context参数 context是上下文的意思  这里是store对象
      // payload:传递过来的参数
      
      // 异步操作 
      return new Promise((resolve,reject)=>{
        // 模拟异步操作
        setTimeout(()=>{
          console.log('vuex actions',context,payload)
          context.commit('updateInfo')
          resolve('修改完成')
        },1000)
      })
    }
  },
  // 相当于计算属性 在这里对state里字段进行处理
  getters:{
    powerCount(state){ // 默认有state参数 是state里的数据
      return state.count* state.count
    },
    // 获取年龄大于20的学生
    more20Stu(state){
      return state.students.filter(s=>s.age>20)
    },
    // 获取年龄大于20的学生的数量
    more20StuLength(state,getters){ // 通过state参数获取state中的变量
      // 通过getters参数获取getters中的方法
      return getters.more20Stu.length
    },
    // 获取年龄大于age(参数)的学生的数量
    moreAgeStu(state){ // state参数获取state中变量
      return function (age){ // 如果getters中方法需要传参 则返回一个函数 函数的参数就是要传的参数
        return state.students.filter(s=>s.age>age)
      }
    }
  },
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