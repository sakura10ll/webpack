const path = require('path');
const CopyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolveLoader: { // loader的地址，先去node_modules内去找
    modules: ['node_modules', './loader']
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [ // loader 是自后往前执行的
        {
          loader: 'replace.loader',
        },
        {
          loader: 'replace.loaderAsync',
          options: {
            name: 'keba'
          }
        }
      ]
    }]
  },
  plugins: [
    new CopyrightWebpackPlugin({
      name:'开课吧'
    })
  ]
}

