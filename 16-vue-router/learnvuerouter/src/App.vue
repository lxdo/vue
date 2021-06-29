<template>
  <div id="app">
    <!--
      路由跳转标签 router-link
      1.默认渲染成a标签 tag属性可以修改其渲染成什么标签
      2.默认是可以通过浏览器 <-  -> 进行返回前进切换 加上replace属性
      就可以不能通过浏览器切换 只能点击标签切换
      3.渲染出来的点击标签 有两个class
      <button class="router-link-exact-active router-link-active">关于</button>
      我们可以利用 router-link-active这个class对标签设置样式
      我们还可以利用 active-class属性对router-link-active class自定义名称
      下面active就是默认的router-link-active
      如果要批量修改active-class属性 可以再router/index.js中修改
        -->
    <!--
    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>
    -->
    <router-link to="/home"  replace>首页</router-link>
    <router-link to="/about"  replace >关于</router-link>
    <router-link to="/profile" >档案</router-link>
    <!--
    在路由上拼接query参数
    {path:路由,query:{参数:参数值}}
    -->
    <router-link :to="{path:'/profile',query:{name:'why',age:19,height:1.88}}">档案</router-link>
    <!-- 动态路由 在路由上拼接路由 让路由动态变化  -->
    <router-link v-bind:to="'/user/'+userId">用户</router-link>
    <!--
      <router-view></router-view>相当于占位标签
      决定组件渲染位置  组件渲染时 组件内容会替换这个标签
      --->

    <!--
    keep-alive是Vue内置的一个组件 可以使被包含的组件保留状态，或避免重新渲染
    有两个非常重要的属性:
    include --字符串或正则表达 只有匹配的组件会被缓存
    exclude --字符串或正则表达 任何匹配的组件都不会被缓存
    router-view也是一个组件 ，如果直接被包在keep-alive里面，所有路径匹配到的视图组件都会被缓存
     -->
    <keep-alive exclude="Profile,User"> <!--Profile,User (组件的name) 不要有空格 --->
      <router-view></router-view>
    </keep-alive>

    <!--手动触发路由跳转-->
    <button @click="homeClick" >首页</button>
    <button @click="aboutClick" >关于</button>
    <!-- 手动实现动态路由 在路由上拼接路由 -->
    <button @click="userClick" >用户</button>
    <!-- 手动实现在路由上拼接query参数-->
    <button @click="profileClick">档案</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeClick(){
      // 这里的this.$router是router/index.js创建的路由对象
      // 通过代码的方式修改路由 vue-router
      // this.$router.push('/home') // push = pushState 可以通过浏览器 <- ->返回前进
      this.$router.replace('/home')// replace = replaceState 不能通过浏览器控制
    },
    aboutClick(){
      // this.$router.push('/about')
      this.$router.replace('/about')
    },
    userClick(){
      this.$router.push('/user/'+this.userId)
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'kobe',
          age:19,
          height:1.87
        }
      })
    }
  },
  data () {
    return {
      userId:20,
    }
  }
}
</script>

<style>
/*
.router-link-active{
  color: green;
}
*/
.active{
  color: red;
}
</style>
