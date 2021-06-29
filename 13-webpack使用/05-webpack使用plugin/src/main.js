// CommonJs模块化导入
const {sum, mul} = require('./js/mathUtils.js')
console.log(sum(10, 20));
console.log(mul(10, 20));

// ES6模块化导入
import {name, age} from "./js/info";

console.log(name, age);

// 3.在js入口程序 加载依赖css文件
require('./css/normal.css')

// 4.依赖less文件
require('./css/special.less')

//5.使用vue进行开发 在js入口程序引入vue
import Vue from "vue";
// 引入组件APP
// import APP from './vue/app'  // 引用的是app.js
import APP from "./vue/APP"; // 引用的是APP.vue
// 真实开发 不需要变量接收Vue实例 直接这样实例化即可
new Vue({
    // 同时有el和template属性 template里内容会直接替换掉el绑定的标签元素内容
    // template里内容会替换掉 index.html中 <div id="app"> 。。。</div>
    el: '#app',
    template:'<APP/>', // 相当于 在index.html中写 <APP/> 使用组件
    components:{ // 注册 Vue实例的子组件
        APP
    }
})
