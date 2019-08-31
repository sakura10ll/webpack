import $ from "jquery";

import './css/index.css';
// webpack 默认只能打包处理js类型的文件，无法处理其他非 js 类型的文件；
// 如果要处理非 js 类型的文件，我们需要手动安装一些合适的第三方 loader 加载器
// 若需要打包处理 css 文件，需要安装 style-loader css-loader
// 在webpack.config.js 配置文件中新增一个 module 配置节点


// $(function () {
//     $("div").css("backgroundColor",'#bbb')
// });