import axios from "axios";

// 封装网络请求
export function request(config){

    // 1.创建axios实例
    const instance = axios.create({
      baseURL:'http://www.record.com',
      timeout:5000
    })
    // 2.axios的拦截器
    // 拦截请求
    instance.interceptors.request.use(config=>{ // 请求成功拦截
      console.log(config) 
      /*
       请求拦截的作用
        1.对config中信息进行处理
        2.每次发送网络请求时，在界面中显示一个请求的图标
        3.某些网络请求,必须携带一些鉴权信息(比如token)
      */
      return config 
    },err=>{  // 请求失败拦截
      console.log(err)
    })

    // 拦截响应
    instance.interceptors.response.use(res=>{ // 响应成功拦截
      console.log(res)
      /*
      响应拦截的作用
        1.对响应进行处理
      */
      return res.data 
    },err=>{ // 响应失败拦截
      console.log(err)
    })
    // 3.发送真正的网络请求
    return instance(config) // 返回promise对象
}


