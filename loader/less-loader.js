const less = require('less');  // 用less 编译成 css
function loader(source){  // loader的参数是源代码
  let css = '';
  less.render(source, function(err, c){
    css = c.css;
  })
  // css = css.replace(/\n/g, '\\n');
  return css;
}
module.exports = loader;