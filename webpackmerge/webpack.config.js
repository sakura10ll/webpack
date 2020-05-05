let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

// cleanWebpackPlugin
// copyWebpackPlugin
// bannerPlugin  内置插件

module.exports={
  mode: 'development',
  entry: {
    home: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  // watch: true,
  // watchOptions: { // 监控的选项
  //   poll: 1000, // 每秒 问我 1000次
  //   aggregateTimeout: 500, // 防抖 我一直输入代码
  //   ignored: /node_modules/ // 不需要监控哪个文件
  // },
  resolve:{ // 解析第三方包 common
    module: [ path.resolve("node_modules")],
    extensions: ['.js', '.css', '.json', '.vue']  // 自动添加后缀
    // mainFields: ['style', 'main']
    // mainFiles: []  入口文件的名字
    // alias:{ // 别名
    //   别名:  引入路径
    // }
  },
  devServer:{
    // 有服务端，不想用代理来处理， 能不能在服务端中启动webpack 端口用服务端端口
    // 前端只想单纯的模拟数据
    // before(app){
    //   app.get("/user", (req, res)=>{
    //     res.json({name: '假数据'})
    //   })
    // },
    // 代理
    // proxy:{
    //   // 'api': 'http:localhost'  // 配置一个代理
    //   '/api':{  // 重写方式， 把请求代理到express 服务器上
    //     target: '地址',
    //     pathRewrite: {'api': ''}
    //   }
    // }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({  // 定义环境变量
      DEV: JSON.stringify('dev')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'home.html',
      chunks: ['home']  // 区分各自引入的代码块
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([  // 拷贝插件
      {
        from: 'doc',
        to: './'
      }
    ]),
    new webpack.BannerPlugin("make ...")   // 给每个文件加入版权声明等
  ]
}
