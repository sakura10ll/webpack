// import $ from "jquery";

// import './css/index.css';
// // webpack 默认只能打包处理js类型的文件，无法处理其他非 js 类型的文件；
// // 如果要处理非 js 类型的文件，我们需要手动安装一些合适的第三方 loader 加载器
// // 若需要打包处理 css 文件，需要安装 style-loader css-loader
// // 在webpack.config.js 配置文件中新增一个 module 配置节点
// import a from './a';
// console.log(a)
// // $(function () {
// //     $("div").css("backgroundColor",'#bbb')
// // });
// const f = () =>{
//   console.log('es6')
// }
// f();
// console.log('home');

// class Log{
//   constructor(){
//     console.log('出错了');
//   }
// }
// let log = new Log();

// let xhr = new XMLHttpRequest();

// xhr.open('GET', '/api/user', true);

// xhr.onload = function(){
//   console.log(xhr.response());
// }

// xhr.send();


// import React from 'react';
// import { render } from 'react-dom';

// render(<h1>jsx</h1>, window.root);

// import './a';
// import './b';

// console.log('index.js')


// let button = document.createElement('button');
// button.innerHTML = 'hello';
// // react(vue) 懒加载
// button.addEventListener('click', function(){
//   // jsonp 实现动态加载文件
//   import('./source.js').then(data=>{
//     console.log(data.default);
//   })
// })
// document.body.appendChild(button);


// import str from './source';
// console.log(str);
// if(module.hot){
//   module.hot.accept('./source')
// }

let str = require('./a.js');
console.log(str);