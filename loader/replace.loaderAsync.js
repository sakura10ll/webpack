// 拿到入口文件的源码，替换里面的字符串
// loader本身就是一个函数，不能使用箭头函数
const loaderUtils = require('loader-utils');


module.exports = function(source){
  //  console.log(source);
  // source 是源文件的内容
  const options = loaderUtils.getOptions(this);
  // 处理异步操作
  const callback = this.async();
  setTimeout(()=>{
    const result = source.replace('webpack', options.name);
    callback(null, result);
  },100)
  
}