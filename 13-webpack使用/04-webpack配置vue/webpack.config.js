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

// 导入vue-loader
const {VueLoaderPlugin}=require('vue-loader')
// 导入webpack
const webpack = require('webpack')
// 导出
module.exports = {
    // 入口文件
    entry: './src/main.js', // 入口  源代码入口文件
    // 出口文件
    output: { // 出口 打包后的代码
        path: path.resolve(__dirname, 'dist'), // 动态获取dist绝对路径  打包发布目录
        filename: 'bundle.js', // 打包后的文件名
        publicPath:'dist/' // 如果加上这个属性 以后涉及到url 都会在url前自动拼上 dist/
        // 使用file-loader引用文件(图片) 如果配置这个 在加载文件(图片)时会自动在url前加上 dist/
    },
    // loader配置
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader 只负责将css文件进行加载
                // style-loader 负责将css样式添加到html DOM中 渲染页面
                // webpack使用多个loader是从右向左读取 先用的放在后面
                use: ['style-loader', 'css-loader']  // 数组写法
            },
            {
                test: /\.less$/,
                use: [{ // 对象写法 先用的写后面 顺序不能乱
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { // 对象写法可以增加 options属性
                            // 当加载的图片小于这里的limit时，会将图片编译成base64字符串形式
                            /*
                                当加载的图片大于这里的limit时，需要使用file-loader模块进行加载
                                当用file-loader时,是把文件(图片)打包成文件(图片)【文件名称是哈希值】到dist中
                            */
                            limit: 8192,
                            // 给打包后的文件(图片)制定命名规则
                            name:'img/[name].[hash:8].[ext]'
                            // img/ 文件打包到dist/img/ 目录下
                            // [name] 取文件原名 .拼接符  [hash:8] 取32位哈希值前8位 [ext] 取文件原扩展名
                        },


                    }
                ]
            },
            {
                test: /\.js$/, // 匹配js文件
                // 排除node_modules和bower_components文件夹里的js文件
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015'] // es2015就是ES6 这里配置需要转换的版本
                    }
                }
            },
            {
                // 配置vue-loader
                test:/\.vue$/,
                use: ['vue-loader']

            }

        ]
    },
    resolve:{
        alias:{ // 别名
            'vue$':'vue/dist/vue.esm.js'
            // 在代码中 import Vue from "vue" 默认引用 node_modules/vue/dist/vue.runtime.js中Vue对象
            // 如果配置此项 就会引用 node_modules/vue/dist/vue.esm.js中Vue对象

        },
        extensions:['.js','.css','.vue'], // 在这里配置的扩展名 在引入文件时可以省略 import Cpn from "./Cpn";
    },
    // 插件
    plugins:[
        new VueLoaderPlugin() ,// 使用vue-loader 一定要配置这个
        new webpack.BannerPlugin('最终版权归小张所有') // 添加版权的plugin
    ]
}
