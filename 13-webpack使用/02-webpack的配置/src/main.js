// CommonJs模块化导入
const {sum,mul} = require('./js/mathUtils.js')
console.log(sum(10, 20));
console.log(mul(10, 20));

// ES6模块化导入
import {name,age} from "./js/info";

console.log(name, age);
