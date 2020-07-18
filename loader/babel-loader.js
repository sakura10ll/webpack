
// 实现babel-loader
const babel = require('@babel/core');
const loaderUtils = require('loader-utils');
function loader(source){  // this loaderContext
  // console.log(Object.keys(this));
  let options = loaderUtils.getOptions(this)
  // console.log(options);
  let cb = this.async();
  babel.transform(source, {
    ...options,
    sourceMap: true,   // 生成sourcemap 文件
    filename: this.resourcePath.split('/').pop(),  // 文件名 
  }, function(err, result){
    cb(err, result.code, result.map)  // 异步
  })
}
module.exports = loader;