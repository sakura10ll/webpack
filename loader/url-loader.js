const loaderUtils = require('loader-utils');
const mime = require("mime");
function loader(source){
  let { limit } = loaderUtils.getOptions(this);
  if(limit && limit > source.length){
    return `module.exports="data:${mime.getType(this.resourcePatch)};base64,${source.toString('base64')}"`
  }else{
    return require('./file-loader.js').call(this, source);
  }
}
loader.raw = true;
module.exports = loader;