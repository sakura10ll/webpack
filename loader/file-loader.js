const loaderUtils = require('loader-utils');
function loader(source){
  // 根据当前格式生成一个路径
  let filename = loaderUtils.interpolateName(this, '[hash].[ext]', { content: source });
  this.emitFile(filename, source);  // 发射文件

  return `module.exports="${filename}"`;
}
loader.raw = true; // 资源为二进制读取
module.exports = loader;