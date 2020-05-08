/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/flow.jpg":
/*!*************************!*\
  !*** ./assets/flow.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/url-loader/dist/cjs.js):\nError: Cannot find module 'file-loader'\nRequire stack:\n- /Users/mac/Documents/test/webpack/node_modules/url-loader/dist/index.js\n- /Users/mac/Documents/test/webpack/node_modules/url-loader/dist/cjs.js\n- /Users/mac/Documents/test/webpack/node_modules/loader-runner/lib/loadLoader.js\n- /Users/mac/Documents/test/webpack/node_modules/loader-runner/lib/LoaderRunner.js\n- /Users/mac/Documents/test/webpack/node_modules/webpack/lib/NormalModule.js\n- /Users/mac/Documents/test/webpack/node_modules/webpack/lib/NormalModuleFactory.js\n- /Users/mac/Documents/test/webpack/node_modules/webpack/lib/Compiler.js\n- /Users/mac/Documents/test/webpack/node_modules/webpack/lib/webpack.js\n- /Users/mac/Documents/test/webpack/node_modules/webpack-cli/bin/utils/convert-argv.js\n- /Users/mac/Documents/test/webpack/node_modules/webpack-cli/bin/cli.js\n- /Users/mac/Documents/test/webpack/node_modules/webpack/bin/webpack.js\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:772:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:677:27)\n    at Module.require (internal/modules/cjs/loader.js:830:19)\n    at require (/Users/mac/Documents/test/webpack/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\n    at Object.loader (/Users/mac/Documents/test/webpack/node_modules/url-loader/dist/index.js:120:20)");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_flow_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/flow.jpg */ "./assets/flow.jpg");
/* harmony import */ var _assets_flow_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_flow_jpg__WEBPACK_IMPORTED_MODULE_0__);
/**textAAAAAAA1234**/
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


let img = new Image();
img.src = _assets_flow_jpg__WEBPACK_IMPORTED_MODULE_0___default.a;
document.body.appendChild(img);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map