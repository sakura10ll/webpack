const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{
    port: 3000,

  },
  module:{
    // noParse: 'jquery', // 不去解析jquery中的依赖库  优化点
    rules: [
      {
        test: /.\js$/,
        use:[{
          loader: 'babel-loader',
          options:{
            exclude: /node_modules/, // 排除某个文件  优化点
            include: path.resolve('src'), // 包含某个文件
            presets:[
              '@babel/preset-env',
              '@babel/preset-react'
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
    new webpack.IgnorePlugin(/\.\/locale/,/moment/), // 忽略一些文件，引入moment包时，打包去掉该语言文件包，减少体积
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}