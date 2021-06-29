let name ='ming'
let age = 18
let flag =true

function sum (n1,n2){
  return n1+n2
}

// export 指令用于导出变量

// 1.导出方式1:
export {flag,sum}

// 2.导出方式2:
export let a = 1000
export let height =1.88

// 3.导出函数/类
export function sub (n1,n2){
  return n1-n2
}

// 4.导出ES6类
export class Person {
  run(){
    console.log("在奔跑");
  }
}
// 5.export default 变量  一个模块只能有一个变量通过这种方式导出
// 导出自己模块的变量 在其他模块导入可自定义变量名称
const address ='北京市'
// export default 普通变量
// export default address
// export default 函数  函数不需要命名
export default function (argument){
  console.log(argument);
}
