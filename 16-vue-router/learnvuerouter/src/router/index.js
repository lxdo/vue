// 配置路由信息

import Vue from 'vue'
import Router from 'vue-router'
// 导入组件 路由正常加载
/*
import Home from '@/components/Home'
import About from '@/components/About'
import User from '@/components/User'
*/
// 1.通过vue.use(插件) ,安装插件
Vue.use(Router)

// 2.创建路由对象
const router = new Router({
  // 配置路由和组件之间的映射关系
  routes: [
    { // 网页一打开初始就显示首页
      path: '/',   // 初始化路径
      redirect: '/home' // 重定向至首页
    },
    {
      path: '/home', // 路径中出现/home显示Home这个组件
      // component: Home, // 正常加载
      // 路由懒加载
      component: () => import('../components/Home'),
      meta:{ // 元数据
        title:'首页'
      },
      // 配置子路由
      children: [
        // 默认路径 首页默认显示
        {
          path: '/',
          redirect: 'news'
        },
        {
          path: 'news', // 子路由不需要加/  会自动拼成home/news
          component: () => import('../components/HomeNews')  // 懒加载
        },
        {
          path: 'message',
          component: () => import('../components/HomeMessage')
        }
      ],
    },
    {
      path: '/about',
      // component: About ,// 正常加载
      // 路由懒加载
      component: () => import('../components/About'),
      meta:{ // 元数据
        title:'关于'
      },
      // 路由独享守卫
      beforeEnter:(to,from,next)=>{
        console.log('about')
        next()
      },

    },
    // 动态路由
    {
      path: '/user/:userId',  // userId名称自定义
      // component: User, // 正常加载
      // 路由懒加载
      component: () => import('../components/User'),
      meta:{ // 元数据
        title:'用户'
      },
    },
    {
      path: '/profile',
      component: () => import('../components/Profile'),
      meta:{ // 元数据
        title:'档案'
      },
    }
  ],
  // vue-route默认是用url hash修改url 这里可以配置使用html5的history
  mode: 'history',
  linkActiveClass: 'active' // 在这里批量修改router-link中的active-class属性
})

// 3.将router对象传入到Vue实例
export default router

// vue-router 全局导航守卫(全局监听路由跳转)  前置钩子(回调) 在路由切换前调用
router.beforeEach((to, form, next) => {
  // 从from跳转到to   from:跳转前路由  to:跳转后路由
  console.log(to);
  console.log('beforeEach');
  document.title=to.matched[0].meta.title // 获取路由对象中定义的mate中title字段
  next()  // 一定要调用 next()
})

// vue-router 全局导航守卫(全局监听路由跳转)  后置钩子(回调) 在路由切换后调用
router.afterEach((to,from)=>{
  console.log('afterEach');

  // 不需要调用next函数
})

// 路由独享守卫
// https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
// 组件守卫
// https://router.vuejs.org/zh/guide/advanced/navigation-guards.html

