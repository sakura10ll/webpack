const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');  // babel7的工具库,帮助我们分析内部的语法，包括es6，返回一个ast抽象语法树
const traverse = require('@babel/traverse').default; // 遍历所有的引入模块,默认返回的是一个对象模块，需调用内部的default属性
const babel = require('@babel/core');  // 将抽象语法树ast解析,转化成浏览器可以识别的代码

// 分析入口文件

const rukoufenxi = entry => {
  const content = fs.readFileSync(entry, 'utf-8');
  // AST 抽象语法树
  const ast = parser.parse(content, {
    sourceType: 'module',
  });
  const yilai = {};
  traverse(ast, {
    ImportDeclaration({ node }) { // node 是获取到当前的引入模块信息
      const dirname = path.dirname(entry);
      const newFile = './' + path.join(dirname, node.source.value);
      yilai[node.source.value] = newFile;
      // yilai.push(node.source.value);  // 获取当前引入模块的相对路径
      // console.log(node);
    }
  })
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  })
  return {
    entry,
    yilai,
    code
  }
}


const yilaifenxi = (entry) =>{
  const rukou = rukoufenxi(entry);
  const yilaiArr = [rukou];
  for(let i= 0;i<yilaiArr.length; i++){
    const item = yilaiArr[i];
    const { yilai } = item;
    if(yilai){
      for(let j in yilai){
        yilaiArr.push(rukoufenxi(yilai[j]));
      }
    }
  }
  // console.log(yilaiArr);
  const newData = {};
  yilaiArr.forEach((item)=>{
    newData[item.entry] = {
      yilai: item.yilai,
      code: item.code
    }
  })
  return newData;
  // console.log(newData)
}


const generateCode = (entry) =>{
  const data = JSON.stringify(yilaifenxi(entry));
  return `(function(data){
    function require(module){
      function localRequire(relativePath){
        return require(data[module].yilai[relativePath]);
      }
      var exports = {};
      (function(require, exports, code){
        eval(code);
      })(localRequire, exports, data[module].code)
      return exports;
    }
    require(${entry})
  })('${data}')`
}

const code = generateCode("./src/index.js")
console.log(code);


