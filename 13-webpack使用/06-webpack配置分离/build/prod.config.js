// webpack 生产环境配置文件

// 导入UglifyJsPlugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// webpack 配置文件合并
// 1.安装 npm install webpack-merge --save-dev
// 2.导入 webpackMerge webpack配置文件合并
const WebpackMerge=require('webpack-merge')
// 3.导入baseConfig 公共配置
const baseConfig=require('./base.config')
// 导出配置
// 4.module.exports=WebpackMerge.merge(公共配置,需要合并配置)
module.exports=WebpackMerge.merge(baseConfig,{ // 公共配置文件,生产环境配置
    // 插件
    plugins:[
        new UglifyJsPlugin() // 对打包的js文件进行压缩 打包上架时使用
    ],
})

/**
    5.在package.json scripts 自定义webpack配置文件
    "build": "webpack --config ./build/prod.config.js", // 配置文件路径

 */
