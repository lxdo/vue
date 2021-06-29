// 在main.js文件中，小明想通过flag 进行一些判断，完成后续的事情

if(flag){
    console.log('小明是天才');
}

// 使用闭包实现模块化
if(moduleMing.flag){
  console.log('小明是天才,哈哈哈');
}

/**
  模块化有两个核心:导入和导出
 */


/**
  CommonJs导入
  CommonJs 模块化只能在webpack打包后运行
  
  let {flag,test,demo} = require('./ming')
  // 等同于
  let moduleM=require('./ming')
  let flag= moduleM.flag
  let test= moduleM.test
  let demo =moduleM.demo
 */

