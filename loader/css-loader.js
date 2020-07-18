function loader(source){
  let reg = /url\((.+?)\)/g;
  let pos = 0;
  let current;
  let arr = ['let list = []'];
  // console.log(source);
  while(current = reg.exec(source)){  // [matchUrl, g]
    // console.log(current);
    let [matchUrl, g] = current;  // matchUrl current 中第一个元素，匹配到的字符串（url("../img/searchImg.png")）
    // console.log(matchUrl, g);   // g   "../img/searchImg.png"
    // console.log(reg.lastIndex, matchUrl.length);
    let last = reg.lastIndex - matchUrl.length;  // 获取url前的字符串
    arr.push(`list.push(${JSON.stringify(source.slice(pos, last))})`);  // 向数组中push  url 前的字符串
    pos = reg.lastIndex;
    // 把 g 替换成 require 写法  => url(require('xxx'))
    arr.push(`list.push('url('+require(${g})+')')`);
  }
  arr.push(`list.push(${JSON.stringify(source.slice(pos))})`);  // push url 后剩余的字符串
  arr.push(`module.exports=list.join('')`);
  // console.log(arr.join('\r\n'));
  return arr.join('\r\n');
}

module.exports = loader;