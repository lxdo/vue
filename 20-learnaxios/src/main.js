import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

/*
使用axios
   1.安装:npm install axios --save
*/
// 2.导入
import axios from 'axios'

// axios的使用

// 1.使用全局的axios和对应的配置进行网络请求
// 全局配置
axios.defaults.baseURL='http://www.record.com' // 基础路由
axios.defaults.timeout=5000  // 请求超时时间 单位:毫秒

// 1.axios基本使用 发起请求
axios({ // config
  url:'/vue-get.php', // 请求url
  method:'GET', // 请求方法  默认是GET请求 
  params:{ // GET请求参数 
    type:'get',
    page:1
  }
}).then(res=>{   // axios支持返回promise对象
  // console.log('基本使用get请求',res)
})

axios({
  url:'/vue-post.php', // url
  method:'POST', // 请求方法
  data:{
    type:'post',
    page:2
  }
}).then(res=>{
  // console.log('基本使用post请求',res) 
})

// 并发请求 同时获取多个接口返回值进行处理
axios.all([axios({
  url:'/vue-get.php',
  params:{ // GET请求参数 
    type:'GET',
    page:1
  }
}),axios({
  url:'/vue-post.php',
  method:'POST'
})]).then(results=>{
  // console.log('并发请求',results)
})

// 使用 axios.spread((res1,res2)=>{}) 分别获取并发请求结果
axios.all([axios({
  url:'/vue-get.php',
  params:{ // GET请求参数 
    type:'GET',
    page:1
  }
}),axios({
  url:'/vue-post.php',
  method:'POST'
})]).then(axios.spread((res1,res2)=>{ // 使用 axios.spread((res1,res2)=>{}) 分别获取并发请求结果
  // console.log(res1,res2)
}))


// 创建axios实例和对应配置发起请求  优点:可以使用不同的实例发起不同的请求
// 实例1 配置
const instance1= axios.create({
  baseURL:'http://www.record.com', // 基础路由
  timeout:5000
})
// 用实例1发起请求
instance1({
  url:'/vue-get.php',
  params:{ // GET请求参数 
    type:'get',
    page:1
  }
}).then(res=>{
  // console.log('instance1',res)
})
// 实例2 配置
const instance2=axios.create({
  baseURL:'http://mapi.plus.jinhua.com.cn', // 基础路由
  timeout:5000,
  headers:{

  }
})
// 用实例2发起请求
instance2({
  url:'/api/open/wxjh/home_page_new_507.php?_member_id=330129&app_version=5.0.7&phone_models=TAS-AN00&client_id_android=697c558b751d17d1afb143990fc76fb3&language=Chinese&client_type=android&version=5.0.7&access_token=246cb26eda17b249f6044aa4d36327ae&locating_city=%E5%8D%97%E4%BA%AC%E5%B8%82&system_version=10&appid=m2ocz55ooduxnevu31&device_token=56bf97db5f2a2d3d327d1e656301212b&location_city=%E5%8D%97%E4%BA%AC&package_name=com.hoge.android.jinhua&appkey=245a3558c1830e1210bceff392726e90'
}).then(res=>{
  // console.log(res)
})


// 数组的解构  
let names = ['why','kobe','james']
let [name1,name2,name3]=names // 一次性取出数组中的元素
// console.log(name1,name2,name3)

// 封装网络请求
import {request} from './network/request'
request({
  url:'/test.php',
}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})
