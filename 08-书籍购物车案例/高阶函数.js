const nums= [10,200,30,400,50,600]

  // 常用for循环
    // 1.普通for循环
      for(let i=0;i<nums.length;i++){
        console.log(i,nums[i])
      }
      // 2.let index in 数组/对象
      for(let i in nums){
          console.log(i,nums[i])
      }
      // 3.let item of 数组/对象
      for(let num of nums){
        console.log(num)
      }
      
// 数组操作的高阶函数
/*
  1.filter函数
  对象/数组.filter(function(item){ // item数组元素
    
  })

  filter中的回调函数有一个要求:必须返回一个bool值 
  当返回true时,函数内部会自动将这次回调的item加入到新的数组中 filter函数最后会返回这个新数组
  当返回false是，函数内部会自动过滤这次的item

*/  
// 取出nums中小于100的元素
let newNums=nums.filter(function(n){ // 遍历传入数组元素
  return n<100
})
console.log('newNums',newNums) // [10, 30, 50]

/*
  2.map 函数

  对象/数组.map(function(item){ // item数组元素
    
  })

  回调函数的返回值就是对应item的新值
*/

// 把数组newNums中元素都*2
let new2Nums=newNums.map(function(item){
  return item*2
})

console.log('new2Nums',new2Nums)

/*
  3.reduce函数 
  作用:对数组中所有的内容进行汇总
  
  对象/数组.reduce(function (preValue,item) { // preValue是回调函数上一次的返回值 item数组元素


  },init) 

  回调函数返回值 是下一次循环的preValue的值

  reduce函数两个参数
  第一个参数是回调函数 function(preValue,item){} preValue上次回调函数返回值 item数组元素
  第二个参数是preValue初始化值 是preValue第一次的值


*/

// 计算new2Nums数组元素总和
let total=new2Nums.reduce(function (preValue,item) { //  preValue是回调函数上一次的返回值 item数组元素
  return preValue+item    // 返回值是下一次循环的 preValue的值
},0) // preValue初始化值 默认为0

console.log('total',total)

// 组合使用
total=nums.filter(function (item) { // 过滤 取小于100的元素
  return item < 100  
}).map(function (item) {  // 把元素值*2
  return item * 2
}).reduce(function (preValue,item) {  // 计算元素总和
  return preValue+item
},0)

console.log('total',total)

// 组合使用 箭头函数写法
total = nums.filter(item=>item<100).map(item=>item*2).reduce((preValue,item)=>preValue+item)
console.log('total',total)

