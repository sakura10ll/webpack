let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
  mode: 'development',
  entry: {
    home: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  // 增加映射文件  帮助我们调试源代码
  // 会单独生成一个sourceMap 文件， 出错了会标识 当前报错的列和行
  // devtool: 'source-map',
  // 不会产生单独的文件，会显示报错的列和行
  // devtool: 'eval-source-map',
  // 不会产生列，但是是一个单独的映射文件,产生后可以保留起来
  // devtool: 'cheap-module-source-map',
  //  不会产生文件， 集成在打包后的文件中， 不会产生列
  devtool: 'cheap-module-eval-source-map',
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
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'home.html',
      chunks: ['home']  // 区分各自引入的代码块
    })
  ]
}