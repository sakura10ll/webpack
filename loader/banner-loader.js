// 实现banner-loader
const loaderUtils = require('loader-utils');
const validateOptions = require('schema-utils'); // 校验方法
const fs = require('fs');
function loader(source){
  this.cacheable && this.cacheable(false);
  let options = loaderUtils.getOptions(this);
  let cb = this.async();
  let schema = {
    type: 'object',
    properties: {
      text: {
        type: 'string',
      },
      filename: {
        type: 'string',
      }
    }
  }
  validateOptions(schema, options, 'banner-loader');
  if(options.filename){
    this.addDependency(options.filename);  // 自动添加文件依赖
    fs.readFile(options.filename, 'utf-8', function(err, data){
      cb(err, `/**${data}**/${source}`)
    })
  }else{
    cb(null, `/**${options.text}**/${source}`)
  }
}
module.exports = loader;