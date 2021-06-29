export default {
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
}