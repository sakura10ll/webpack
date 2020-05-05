const express = require('express');
let app = express();
const webpack = require('webpack');

// 中间件
let middle = require('webpack-dev-middleware');

let config = require('./webpack.config');

let compiler = webpack(config);

app.use(middle(compiler));

app.get("/api/user", (req,res)=>{
  res.json({name:'测试'})
});

app.listen(3000);