// 导入mutation常量
import {
  DECREMENT
} from './mutations-types'
export default  { // 定义方法  方法分为两部分 type(事件类型)  事件回调
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

}