<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息，嘿嘿嘿</p>
    <h2>用户id{{userId}}</h2>
    <!--在这里不需要加this-->
    <h2>{{$route.params.userId}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId(){
      return this.$route.params.userId // this.$route是浏览器当前页面的路由
      // 这里的userId名称跟router/index.js中path的userId名称要一致
    }
  },
  methods: {
    btnClick(){
      // 所有的组件都继承自Vue类的原型
      console.log(this.$router) // 就是 router/index.js里创建的路由对象
      console.log(this.$route); // 就是 当前浏览器正在显示页面的路由

      // 调用在main.js中Vue原型定义的test方法
      this.test()
      console.log(this.name);
    }
  } ,
  created() {
    console.log('user created');
  },
  destroyed() {
    console.log('user destoryed');
  }
}
</script>

<style scoped>

</style>
