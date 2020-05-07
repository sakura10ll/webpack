/*
 * @Title: BONC - React
 * @Descripttion: 
 * @Company: 北京东方国信科技股份有限公司
 * @Author: renlulu
 * @Date: 2020-05-06 11:16:41
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Happypack = require('happypack');
// 模块 happypack 可以实现多线程打包
module.exports = {
  mode: 'development',
  optimization: {
    splitChunks: { // 分割代码块
      cacheGroups: { // 缓存组
        common: {
          chunks: 'initial',
          minSize: 0,  // 大小
          minChunks: 2, // 引用几次
        },
        vendor:{
          priority: 1, // 权重，先去抽离npm包
          test: /node_modules/,
          minSize: 0,  // 大小
          minChunks: 2, // 引用几次
        }
      }
    }
  },
  // entry: './src/index.js',
  entry:{
    index: './src/index.js',
    other: './src/other.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{
    hot: true, // 开启热更新
    port: 3000,
    contentBase: 'dist',
    open: true
  },
  module:{
    // noParse: 'jquery', // 不去解析jquery中的依赖库  优化点
    rules: [
      {
        test: /.\js$/,
        exclude: /node_modules/, // 排除某个文件  优化点
        include: path.resolve('src'), // 包含某个文件
        // use: 'Happypack/loader?id=js'
        use:[{
          loader: 'babel-loader',
          options:{
            presets:[
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-syntax-dynamic-import'  // 动态导入包
            ]
          }
        }]
      },
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  plugins:[
    // new Happypack({
    //   id: 'js',
    //   use:[{
    //     loader: 'babel-loader',
    //     options:{
    //       presets:[
    //         '@babel/preset-env',
    //         '@babel/preset-react'
    //       ]
    //     }
    //   }]
    // }),
    // 先去查找打包的 react ，没有的话再对其进行打包，减少打包体积
    // new webpack.DllPlugin({
    //   manifest: path.resolve(__dirname, "dist", 'manifest.json')
    // }),
    new webpack.IgnorePlugin(/\.\/locale/,/moment/), // 忽略一些文件，引入moment包时，打包去掉该语言文件包，减少体积
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.NamedModulesPlugin(), // 打印更新的模块路径
    new webpack.HotModuleReplacementPlugin()  // 热更新插件
  ]
}
