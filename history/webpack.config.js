// 若不设置 webpack.config.js 文件，运行webpack命令，默认打包src下的index.js（只能识别index）文件，并生成打包后的文件main.js

const path = require("path"); // 引入path模块，node.js中提供用于处理文件路径和目录路径的实用工具

// console.info(__dirname);  打印 F:\新建文件夹\webpackConfig
// console.info(__filename); 打印 F:\新建文件夹\webpackConfig\webpack.config.js
// console.info(path.dirname(__filename));  打印 F:\新建文件夹\webpackConfig
// console.info(path.dirname(__dirname));  打印 F:\新建文件夹

// __dirname:当前模块的目录名称,当前文件的所在路径，与__filename,path.dirname() 相同


// --hot 热加载，减少页面不必要的刷新，局部刷新，打包时也不会重新打包，而是局部改变
const webpack = require("webpack"); // 启动热更新的第二步


// 导入在内存中生成html页面的插件
// 只要是插件，都一定要放到plugins节点去
// 其作用：1.自动在内存中根据指定页面生成一个内存的页面；2.自动把打包好的bundle.js 追加到页面中去（该操作是由其配置选项中inject去实现，默认是true）
const htmlWebpackPlugin = require("html-webpack-plugin");



module.exports = {
    entry:path.join(__dirname,"./src/index.js"), // webpack的入口文件，需要webpack打包哪个文件，指定文件路径
    output: {  // 输出文件的相关配置
        path: path.join(__dirname,"./dist"), // 输出到指定目录下,必须是绝对路径
        filename: "bundle.js"  // 输出文件名
    },
    devServer: {   // 配置dev-server 命令参数的第二种方式
        // --open --port 3000 --contentBase src --hot
        open: true, // 自动打开浏览器
        port: 3000, // 设置启动端口
        contentBase: "src", // 指定托管的根目录,若html文件在根目录下，则不需要设置该属性
        hot: true // 启用热更新 第一步
    },
    plugins: [ // 配置插件的节点
        new webpack.HotModuleReplacementPlugin(),    // new 一个热更新的模块对象，启用热更新的第3步

        new htmlWebpackPlugin({    // 创建一个在内存中生成 HTML 页面的插件
            template: path.join(__dirname,"./src/index.html"), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的页面
            filename: "index.html",  // 指定生成的页面的名称
            // inject:'head'
            // inject:true 该参数默认为true,用true或"body"表示将所有js资源放置到body元素的底部；
                                       // 若参数为"head" 表示将所有js资源放置到head元素中
                                       // 若参数为false 则表示不插入js文件，只生成html文件
        })
    ],
    module:{  // 这个节点,用于配置所有第三方模块加载器
        rules: [ // 所有第三方模块的匹配规则  loader调用总是从右到左调用
            // style-loader 是将模块的导出作为样式添加到DOM中，若样式文件只进行对应的loader解析，在页面中并展示不出其样式

            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 配置处理 .css 文件的第三方loader规则

            // less-loader 是将 .less 文件转换为 css ，所以这三个的顺序不可变化，且缺一不可
            // 若只引用 less-loader 打包时，会报解析错误
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 配置处理 .less 文件的第三方loader规则

            // sass-loader 与 less-loader 同理
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 配置处理 .scss 文件的第三方loader规则


            // 默认情况下，webpack无法处理 css 文件中的url地址，不管是图片还是字体库，只要是 Url 地址，都无法处理
            // url-loader?limit=3456&name=[hash:8]-[name].[ext]
            //       limit给定的值是图片的大小，单位为byte,若引用的图片大小 大于或者等于limit的值，则不会转换为base64格式的图片；若小于则转换为base64格式的图片
            //       name 给定的是图片的名字，hash值默认是32位；
            { test: /\.{jpg|png|gif|bmp|jpeg}$/, use: 'url-loader' },  // 处理图片路径的loader

            { test: /\.{ttf|eot|woff|svg|woff2}$/, use: 'url-loader' }, // 处理字体文件的loader

            // webpack 通过babel 可以将高级语法转换为低级语法，打包到bundle.js文件中
            // 配置babel时，一定要将node_modules 文件排除。 1.会将第三方的js文件都编译打包，会非常消耗cpu,并且速度很慢；2.就算打包完毕，项目也无法运行
            // 配置babel需要装的包 babel-core | babel-loader | babel-plugin-transform-runtime | babel-preset-env（包含了所有的es版本，例如：babel-preset-es2015） | babel-preset-stage-0
            // preset 是语法插件， plugin 是转换工具；
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },


        ]

    }
}