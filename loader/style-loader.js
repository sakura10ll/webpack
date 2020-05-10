const loaderUtils = require('loader-utils');
function loader(source){
  // 在 style-loader 中导出一个脚本
  // 需要将less文件内的换行和空格去掉  用json.stringfy()
  let style = `
    let style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(style);
  `
  return style;
}
// 在style-loader 上写 pitch
// style-loader   less-loader!css-loader/./src/index.less
loader.pitch = function (remainingRequest){  // 剩余的请求
  console.log(remainingRequest);
  // 让 style-loader 去处理 less-loader!css-loader/./src/index.less
  // require 路径 返回的就是css-loader 处理好的require('!!css-loader!less-loader!index.less')
  let style = `
    let style = document.createElement('style');
    style.innerHTML = require(${loaderUtils.stringifyRequest(this, '!!' + remainingRequest)});
    document.head.appendChild(style);
  `
return style;
}
module.exports = loader;
