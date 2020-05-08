const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

class P{
  apply(compiler){
    console.log('start');
    compiler.hooks.emit.tap('emit', function(){
      console.log('emit');
    })
  }
}
class P1{
  apply(compiler){
    console.log('start');
    compiler.hooks.afterPlugins.tap('afterPlugins', function(){
      console.log('afterPlugins');
    })
  }
}

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "source-map",
  resolveLoader:{
    // 配置 loader 文件查找路径，先去node_modules去查找，若找不到去loader文件夹下去查找
    modules: ["node_modules", path.resolve(__dirname, 'loader')],
    // 配置loader别名
    // alias:{
    //   loader1: path.resolve(__dirname, 'loader', 'style-loader')
    // }
  },
  watch: true,
  module:{
    rules: [
      {
        test: /\.jpg$/,
        // 目的就是根据图片生成一个md5戳， 发射到dist目录下，file-loader还会返回当前的图片路径
        // use:'file-loader'
        // url-loader  1. file-loader 会处理路径
        use: {
          loader: 'url-loader',
          options: {
            limit: 20 * 1024
          }
        },

      },
      {
        test:/\.js$/,
        use: {
          loader: 'banner-loader',  // 为所有的js加统一的注释
          options: {
            text: 'testBanner',
            filename: path.resolve(__dirname, 'banner.js')
          }
        }
      }
      // {
      //   test:/\.js$/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [
      //         '@babel/preset-env'
      //       ]
      //     }
      //   }
      // }
    ]
    // loader分类 pre 在前面的  post 在后面   normal  用 enforce 参数配置
    // loader 的顺序 pre --> nomal --> inline --> post
    // rules:[ // loader 的顺序问题 从右到左， 从上到下
    //   {
    //     test: /\.less$/,
    //     use:[
    //       'loader1',
    //       path.resolve(__dirname, 'loader', 'less-loader'),
    //     ]
    //   }
    // ]
  },
  // plugins: [
  //   new P(),
  //   new P1()
  // ]

}