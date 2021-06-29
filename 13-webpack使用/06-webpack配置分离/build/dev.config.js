// webpack 开发环境配置文件

// webpack 配置文件合并
// 1.安装 npm install webpack-merge --save-dev
// 2.导入 webpackMerge webpack配置文件合并
const WebpackMerge=require('webpack-merge')
// 3.导入baseConfig 公共配置
const baseConfig=require('./base.config')
// 导出配置
// 4.module.exports=WebpackMerge.merge(公共配置,需要合并配置)
module.exports=WebpackMerge.merge(baseConfig,{ // 公共配置文件,开发环境配置
    // 本地服务器 开发时使用
    devServer:{
        contentBase:'./dist', // 为哪一个文件夹提供本地服务，默认是根文件夹，我们这里要填写./dist
        inline:true, // 页面实时刷新
        port:8080 ,// 端口号 默认就是8080

    }
})

/**
 5.在package.json scripts 自定义webpack配置文件
 "dev": "webpack serve --open Chrome.exe --config ./build/dev.config.js"  // 配置文件路径
 6.在base.config.js修改出口dist路径
 */


