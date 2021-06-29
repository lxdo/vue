// 导入其他模块的变量

// 导入 export {flag,sum} 导出的变量
import {flag,sum} from "./ming.js"
if(flag){
    console.log('小明是天才,哈哈哈');
    sum(10,20)
}

// 导入 export let a = 1000 导出的变量
import {a,height} from "./ming.js";
console.log(a);
console.log(height);

// 导入函数/类
import {sub,Person} from "./ming.js"
console.log(sub(30, 10));
const p= new Person()
p.run()

// 导入 export default 普通变量  导出的变量  ming.js只能有一个这种方式导出的变量/函数
// import addr from "./ming.js" // addr为address自定义名称
// console.log(addr);
// 导入 export default 函数  导出的函数 函数需要自定义名称  ming.js只能有一个这种方式导出的变量/函数
import arg from "./ming.js" // arg 就是 ming.js  export default 方式导出函数的自定义名称
arg('arg = export default 无名函数')

// 如果其他模块可导出内容比较多 import {flag,sum,a,height,sub,Person,...} 这样导入比较复杂
// 可以使用如下方法 把其他模块可导出内容全部导入
import * as ming from "./ming.js"
// 使用其他模块导出的内容
console.log(ming.flag);
console.log(ming.height);
