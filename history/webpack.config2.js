let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
  mode: 'development',
  // 多文件引入
  entry: {
    home: './src/index.js',
    other: './src/a.js'
  },
  output: {
    // 多文件出口
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'home.html',
      chunks: ['home']  // 区分各自引入的代码块
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'other.html',
      chunks: ['other']
    })
  ]
}