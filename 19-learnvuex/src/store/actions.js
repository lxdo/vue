export default {
  actionUpdateInfo(context,payload){ // 默认有context参数 context是上下文的意思  这里是store对象
    // payload:传递过来的参数
    
    // 异步操作 
    return new Promise((resolve,reject)=>{
      // 模拟异步操作
      setTimeout(()=>{
        console.log('vuex actions',context,payload)
        context.commit('updateInfo')
        resolve('修改完成')
      },1000)
    })
  }
}