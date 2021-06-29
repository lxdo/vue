<template>
  <div>
    <h2>我是profile组件</h2>
    <h2 >{{$route.query}}</h2>
    <h2 v-for="item in $route.query">{{item}}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created() {
    console.log('profile created');
  },
  destroyed() {
    console.log('profile destoryed');
  }
}
</script>

<style scoped>

</style>
