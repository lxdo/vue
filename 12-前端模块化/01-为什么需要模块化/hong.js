// hong.js 中 小红定义一个变量 名称是flag 并且为false
flag = false

// 将flag定义在闭包中 有局部作用域 并返回出来
let moduleHong = (function(){
  let obj={}
  obj.flag=false
  return obj
})()

