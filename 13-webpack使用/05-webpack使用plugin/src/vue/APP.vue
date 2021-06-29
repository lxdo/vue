<!--vue组件化开发规范-->

<!--组件模板代码-->
<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <Cpn></Cpn>
  </div>
</template>

<!--js代码-->
<script>
// 导入Cpn组件
import Cpn from "./Cpn";
export default {
  name: "APP",
  components:{
    // 注册子组件
    Cpn
  },
  data(){
    return {
      message: 'hello webpack',
      name:'codewhy'
    }
  },
  methods:{
    btnClick(){

    }
  }
}
</script>

<!--css样式-->
<style scoped>
  .title{
    color: green;
  }
</style>
