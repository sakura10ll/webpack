// 若不设置 webpack.config.js 文件，运行webpack命令，默认打包index.js（只能识别index）文件，并生成打包后的文件main.js

const path = require("path"); // 引入path模块，node.js中提供用于处理文件路径和目录路径的实用工具

// console.info(__dirname);  打印 F:\新建文件夹\webpackConfig
// console.info(__filename); 打印 F:\新建文件夹\webpackConfig\webpack.config.js
// console.info(path.dirname(__filename));  打印 F:\新建文件夹\webpackConfig
// console.info(path.dirname(__dirname));  打印 F:\新建文件夹

// __dirname:当前模块的目录名称,当前文件的所在路径，与__filename,path.dirname() 相同


// --hot 热加载，减少页面不必要的刷新，局部刷新，打包时也不会重新打包，而是局部改变
const webpack = require("webpack"); // 启动热更新的第二步


// 导入在内存中生成html页面的插件
// 只要是插件，都一定要放到plugins节点去
// 其作用：1.自动在内存中根据指定页面生成一个内存的页面；2.自动把打包好的bundle.js 追加到页面中去（该操作是由其配置选项中inject去实现，默认是true）
const htmlWebpackPlugin = require("html-webpack-plugin");

// 处理css样式文件 通过link引入  用这个插件需要自己去压缩文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css文件  用这个插件就必须配置 uglifyjs 插件去压缩js文件，不然js文件无法进行压缩
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');

// 打包前清除之前的打包的文件
// const clear = require('clear')

module.exports = {
  // 优化项
  optimization: {
    minimizer: [
      new UglifyjsPlugin({
        cache:true,
        parallel:true,
        sourceMap: true
      }),
      new OptimizeCss()
    ]
  },
  mode: 'production',  // 模式  默认两种 production，development
  entry: path.join(__dirname, "./src/index.js"), // webpack的入口文件，需要webpack打包哪个文件，指定文件路径
  output: {  // 输出文件的相关配置
    path: path.join(__dirname, "./dist"), // 输出到指定目录下,必须是绝对路径
    filename: "bundle.[hash:8].js"  // 输出文件名  设置哈希戳，并设只有8位
  },
  // 开发服务器的配置
  devServer: {   // 配置dev-server 命令参数的第二种方式
    // --open --port 3000 --contentBase src --hot
    // open: true, // 自动打开浏览器
    port: 3000, // 设置启动端口
    progress: true, // 展示进度条
    compress: true, // 开启压缩
    contentBase: "src", // 指定托管的根目录,若html文件在根目录下，则不需要设置该属性
    hot: true // 启用热更新 第一步
  },
  plugins: [ // 数组 配置所有webpack插件的节点
    // new webpack.HotModuleReplacementPlugin(),    // new 一个热更新的模块对象，启用热更新的第3步

    new htmlWebpackPlugin({    // 创建一个在内存中生成 HTML 页面的插件
      template: path.join(__dirname, "./src/index.html"), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的页面
      filename: "index.html",  // 指定生成的页面的名称
      minify: { // 对该文件进行压缩处理
        removeAttributeQuotes: true, // 删除双引号
        collapseWhitespace: true, // 删除空格
      },
      hash: true  // 对引入文件加上哈希戳
      // inject:'head'
      // inject:true 该参数默认为true,用true或"body"表示将所有js资源放置到body元素的底部；
      // 若参数为"head" 表示将所有js资源放置到head元素中
      // 若参数为false 则表示不插入js文件，只生成html文件
    }),

    // 将css抽离成一个css文件
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ],
  // 模块
  module: {  // 这个节点,用于配置所有第三方模块加载器
    rules: [ // 数组 所有第三方模块的匹配规则  loader调用总是从右到左调用
      // css-loader解析 @import 这种语法   style-loader 是把css插入到head的标签中
      // loader 的用法，一个的话用字符串，多个的话用数组，也可用对象
      // { test: /\.css$/, use: ['style-loader','css-loader'] }, // 配置处理 .css 文件的第三方loader规则
      {
        // 可以处理less文件
        test: /\.css$/,
        use: [
          // {
          //   loader: 'style-loader',
          //   options: {
          //     insertAt: 'top'  // 样式通过style-loader 插入到html中的位置,在html中有添加的style样式，让其插入到其上面
          //   }
          // },
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'  // 自动为css样式加前缀
        ]
      },

      { test: /\.less$/, use: ['style-loader','css-loader','less-loader'] }, // 配置处理 .less 文件的第三方loader规则

      { test: /\.scss$/, use: ['style-loader','css-loader','sass-loader'] }, // 配置处理 .scss 文件的第三方loader规则

    ]

  }
}