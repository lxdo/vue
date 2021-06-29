<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="deeppink">
      <!--- 起别名的路径在html中引用需要加~ --->
      <img slot="item-icon" src="~assets/img/tabbar/1.jpeg" alt="">
      <img  slot="item-icon-active" src="~assets/img/tabbar/1_active.jpeg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="deeppink" >
      <img slot="item-icon" src="~assets/img/tabbar/1.jpeg" alt="">
      <img  slot="item-icon-active" src="~assets/img/tabbar/1_active.jpeg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart"  activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/1.jpeg" alt="">
      <img  slot="item-icon-active" src="~assets/img/tabbar/1_active.jpeg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deeppink" >
      <img slot="item-icon" src="~assets/img/tabbar/1.jpeg" alt="">
      <img  slot="item-icon-active" src="~assets/img/tabbar/1_active.jpeg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
// 引用js文件
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";
export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
