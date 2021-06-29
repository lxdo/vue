<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容,哈哈哈</p>
    <!--子组件内容 路由-->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed:{

  },
  data(){
    return {
      path:'/home/news'
    }
  },
  created() { // 组件被创建时调用
    console.log('home created');
  },
  mounted() { // 组件模板挂载到dom上调用
    console.log('home mounted');
  },
  destroyed() {
    console.log('home destroy');
  },


  // 让点击首页记住显示新闻还是消息
  activated() { // 当跳转到首页就跳转到记住的路由   // 这个函数，只有该组件被保持了状态使用了keep-alive时才有效
    this.$router.push(this.path) // 下次活跃还是跳转到记住的路由
  },
  beforeRouteLeave(to,from,next){ // 路由离开前记住当前路由
    this.path=this.$route.path
    next()
  }
}
</script>

<style scoped>

</style>
<!--
嵌套路由
1.创建子组件
2.创建子路由
3.在父组件 写 router-view 决定子组件显示位置

-->
