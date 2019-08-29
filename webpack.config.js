// 若不设置 webpack.config.js 文件，运行webpack命令，默认打包index.js（只能识别index）文件，并生成打包后的文件main.js

const path = require("path"); // 引入path模块，node.js中提供用于处理文件路径和目录路径的实用工具

// console.info(__dirname);  打印 F:\新建文件夹\webpackConfig
// console.info(__filename); 打印 F:\新建文件夹\webpackConfig\webpack.config.js
// console.info(path.dirname(__filename));  打印 F:\新建文件夹\webpackConfig
// console.info(path.dirname(__dirname));  打印 F:\新建文件夹

// __dirname:当前模块的目录名称,当前文件的所在路径，与__filename,path.dirname() 相同


// --hot 热加载，减少页面不必要的刷新，局部刷新，打包时也不会重新打包，而是局部改变


const webpack = require("webpack"); // 启动热更新的第二步

module.exports = {
    entry:path.join(__dirname,"./src/index.js"), // webpack的入口文件，需要webpack打包哪个文件，指定文件路径
    output: {  // 输出文件的相关配置
        path: path.join(__dirname,"./dist"), // 输出到指定目录下
        filename: "bundle.js"  // 输出文件名
    },
    devServer: {   // 配置dev-server 命令参数的第二种方式
        // --open --port 3000 --contentBase src --hot
        open: true, // 自动打开浏览器
        port: 3000, // 设置启动端口
        contentBase: "src", // 指定托管的根目录,若html文件在根目录下，则不需要设置该属性
        hot: true // 启用热更新 第一步
    },
    plugins: [ // 配置插件的节点
        new webpack.HotModuleReplacementPlugin()    // new 一个热更新的模块对象，启用热更新的第3步
    ]
}