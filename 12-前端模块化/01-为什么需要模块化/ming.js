// ming.js 中 小明定义一个变量 名称是flag 并且为true
flag = true

// 将flag定义在闭包中 有局部作用域 并返回出来
let moduleMing = (function(){
  let obj={}
  obj.flag=true
  return obj
})()

/**
  模块化有两个核心:导入和导出
 */
/**
  CommonJs的导出 
  CommonJs 模块化只能在webpack环境下运行
  
  moduleM.exports={
    flag:true,
    test(a,b){
      return a+b
    },
    demo(a,b){
      return a*b
    }
  }  

 */
