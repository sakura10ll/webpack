const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    react: ['react', 'react-dom']
  },
  output: {
    filename: '_dll_[name].js',  // 产生的文件名
    path: path.resolve(__dirname, 'dist'),
    library: '_dll_[name]' //_dll_react
    // libraryTarget: 'var'  // commonjs var this ... 打包后的格式
  },
  plugins: [
    // 单独打包 react 文件
    new webpack.DllPlugin({  // name == library
      name: '_dll_[name]',
      path: path.resolve(__dirname, 'dist', 'manifest.json')
    })
  ]
}