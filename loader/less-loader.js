const less = require('less');
function loader(source){  // loader的参数是源代码
  let css = '';
  less.render(source, function(err, c){
    css = c.css;
  })
  css = css.replace(/\n/g, '\\n');
  return css;
}
module.exports = loader;