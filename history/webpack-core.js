 
 // webpack 打包后的核心代码块
 (function(modules) {
 	var installedModules = {};
 	function __webpack_require__(moduleId) {
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
 		module.l = true;
 		return module.exports;
 	}
 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
 })
 ({
  "./src/a.js":
  (function(module, exports, __webpack_require__) {
    eval("let b = __webpack_require__(/*! ./base/b.js */ \"./src/base/b.js\");\nmodule.exports = 'a' + b;\n\n\n//# sourceURL=webpack:///./src/a.js?");
  }),

  "./src/base/b.js":
  (function(module, exports) {
    eval("module.exports = 'b';\n\n\n//# sourceURL=webpack:///./src/base/b.js?");
  }),

  "./src/index.js":
  (function(module, exports, __webpack_require__) {
    eval("// import $ from \"jquery\";\n\n// import './css/index.css';\n// // webpack 默认只能打包处理js类型的文件，无法处理其他非 js 类型的文件；\n// // 如果要处理非 js 类型的文件，我们需要手动安装一些合适的第三方 loader 加载器\n// // 若需要打包处理 css 文件，需要安装 style-loader css-loader\n// // 在webpack.config.js 配置文件中新增一个 module 配置节点\n// import a from './a';\n// console.log(a)\n// // $(function () {\n// //     $(\"div\").css(\"backgroundColor\",'#bbb')\n// // });\n// const f = () =>{\n//   console.log('es6')\n// }\n// f();\n// console.log('home');\n\n// class Log{\n//   constructor(){\n//     console.log('出错了');\n//   }\n// }\n// let log = new Log();\n\n// let xhr = new XMLHttpRequest();\n\n// xhr.open('GET', '/api/user', true);\n\n// xhr.onload = function(){\n//   console.log(xhr.response());\n// }\n\n// xhr.send();\n\n\n// import React from 'react';\n// import { render } from 'react-dom';\n\n// render(<h1>jsx</h1>, window.root);\n\n// import './a';\n// import './b';\n\n// console.log('index.js')\n\n\n// let button = document.createElement('button');\n// button.innerHTML = 'hello';\n// // react(vue) 懒加载\n// button.addEventListener('click', function(){\n//   // jsonp 实现动态加载文件\n//   import('./source.js').then(data=>{\n//     console.log(data.default);\n//   })\n// })\n// document.body.appendChild(button);\n\n\n// import str from './source';\n// console.log(str);\n// if(module.hot){\n//   module.hot.accept('./source')\n// }\n\nlet str = __webpack_require__(/*! ./a.js */ \"./src/a.js\");\nconsole.log(str);\n\n//# sourceURL=webpack:///./src/index.js?");
  })
 });