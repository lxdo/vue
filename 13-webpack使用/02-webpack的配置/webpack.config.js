/**
 * 配置 webpack打包的入口文件和出口文件
 * 后面执行webpack就可自动打包 不需要加上入口和出口路径
 */

// 导入path模块
const path = require('path')
/*

    用node下载包的步骤
    1.首先在项目中执行 npm init 生成 package.json 文件
    2.npm install


 */
// 导出
module.exports={
    entry:'./src/main.js', // 入口  源代码入口文件
    output:{ // 出口
        path:path.resolve(__dirname,'dist'), // 动态获取dist绝对路径  打包发布目录
        filename:'bundle.js' // 打包后的文件名
    } // 出口
}
