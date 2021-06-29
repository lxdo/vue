import Vue from 'vue'
import Router from 'vue-router'

// 1.安装插件
Vue.use(Router)
// 2。创建路由对象
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home',
    },
    {
      path:'/home',
      component:()=>import('../views/home/Home')
    },
    {
      path:'/category',
      component:()=>import('../views/category/Category')
    },
    {
      path:'/cart',
      component:()=>import('../views/cart/Cart')
    },
    {
      path:'/profile',
      component:()=>import('../views/profile/Profile')
    },

  ],
  mode:'history'
})
