function loader(source){
  // 需要将less文件内的换行和空格去掉  用json.stringfy()
  let style = `
    let style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(style);
  `
  return style;
}
module.exports = loader;