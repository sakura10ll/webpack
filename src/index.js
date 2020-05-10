
// require('./less/index.less');

// console.log(str);


// -! 不会让文件  再去通过 pre + normal loader 来处理
// ! 没有normal
// !! 什么都不要
// let str = require('!!inline-loader!./a.js');

// loader 默认是由两部分组成 pitchloader（有返回值和无返回值的情况）  normalloader

// class P {
//   constructor(){
//     this.name = 'test';
//   }
//   getName(){
//     return this.name;
//   }
// }

// const pTest = new P();
// console.log(pTest);

// import p from '../assets/flow.jpg';
// let img = new Image();
// img.src = p;
// document.body.appendChild(img);
// import './index.less';
import './css/index.css';