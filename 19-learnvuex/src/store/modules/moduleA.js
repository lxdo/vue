// 定义store modules中的vuex数据
export default {
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