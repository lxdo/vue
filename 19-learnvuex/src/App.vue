<template>
  <div id="app">
    <h2>app组件内容</h2>
    <p>{{message}}</p>
    <p>{{$store.state.count}}</p>
    <!--vuex使用modules中的state变量-->
    <h2>{{$store.state.a.name}}</h2>
    <!--vuex使用modules中的getters计算属性-->
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <!--vuex使用modules中的mutations方法-->
    <button @click="updateName">修改名字</button>
     <button @click="aUpdateName">异步修改名字</button>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="subCount(5)">-5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <button @click="update">同步修改信息</button>
    <button @click="actionUpdate">异步修改信息</button>
    <p style="color=red">{{$store.state.info}}</p>

    <!-- vuex中的计算属性 getters -->
    <p>{{$store.getters.powerCount}}</p>
    <p>{{$store.getters.more20Stu}}</p>
    <p>{{$store.getters.more20StuLength}}</p>
    <p>{{$store.getters.moreAgeStu(12)}}</p>
    <h2>hello vuex内容</h2>
    <hello-vuex></hello-vuex>

  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex' 
// 导入mutation常量
import {
  DECREMENT
} from './store/mutations-types'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data () {
    return {
      message:'我是APP组件',
    }
  },
  methods:{
    add(){
      this.$store.commit('increment') // 调用store的mutations中的方法
    },
    sub(){
      this.$store.commit(DECREMENT) // mutation常量 type为mutations-types.js常量 
    },
    // mutation提交风格 1.普通提交风格 2.特殊提交风格
    addCount(count){ 
      // 1.普通提交风格 count到incrementCount方法就是调用时传递的参数  
      this.$store.commit('incrementCount',count)  // 向mutations中incrementCount方法传参 
    },
    subCount(count){
      // 2.特殊提交风格 count到decrementCount方法是一个payload对象
      this.$store.commit({
        type:'decrementCount',
        count:count
      })
    },
    addStudent(){
      let stu={id:114,name:'alan',age:35}
      this.$store.commit('addStu',stu) // 给addStu传参
    },
    // 经过mutations修改state变量
    update(){
      console.log('app click')
      this.$store.commit('updateInfo')
    },
    // 经过action---mutation修改state变量
    actionUpdate(){
      console.log('app click')
      // 调用vuex actions的方法 : 方法名,传递到方法的参数(payload)  返回值是调用的actions的方法的返回值
      this.$store.dispatch('actionUpdateInfo','我是payload').then(res=>{
        console.log(res) // 回调处理操作结果
      })
    },
    updateName(){
      // vuex使用modules中的mutations方法
      this.$store.commit('updateName','lisi') // 
    },
    aUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>

</style>
