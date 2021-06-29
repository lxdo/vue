// js程序入口

// CommonJs模块化导入
const {sum,mul} = require('./mathUtils.js')
console.log(sum(10, 20));
console.log(mul(10, 20));

// ES6模块化导入
import {name,age} from "./info";

console.log(name, age);
