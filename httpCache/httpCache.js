/*
 * @Title: BONC - React
 * @Descripttion: http 缓存S
 * @Company: 
 * @Author: 
 * @Date: 2020-05-07 11:11:29
 */
const PORT = 8000;
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const mime = require('./mime').types;
const config = require('./config');

const server = http.createServer(function (request, response) {
  const pathname = url.parse(request.url).pathname;
  const realPath = 'assets' + pathname;
  // 返回path的扩展名
  var ext = path.extname(realPath);
  ext = ext ? ext.slice(1) : 'unknown';
  const contentType = mime[ext] || 'text/plain';

  if(ext.match(config.Expires.fileMatch)){
    var expires = new Date();
    expires.setTime(expires.getTime() + config.Expires.maxAge * 100);
    response.setHeader('Expires', expires.toUTCString());
    response.setHeader('Cache-Control', 'max-age=' + config.Expires.maxAge);
  }
  fs.stat(realPath, function(err, stat){
    // 可根据世界时 (UTC) 把 Date 对象转换为字符串
    var lastModified = stat.mtime.toUTCString();
    response.setHeader('Last-Modified', lastModified);

    if(request.headers['if-modified-since'] && lastModified === request.headers['if-modified-since']){
      response.writeHead('304', 'Not Modified');
      response.end();
    }else{
      fs.access(realPath, fs.constants.F_OK, function (err) {
        if(err){
          response.writeHead(404, {
            'Content-Type': 'text/plain'
          })
          response.write('This request URL ' + pathname + 'was not found on this server');
          response.end();
        }else{
          fs.readFile(realPath, 'binary', function (err, file) {
            if(err){
              response.writeHead(500, {
                'Content-Type': 'text/plain'
              })
              response.end();
            }else{
              response.writeHead(200, {
                'Content-Type': contentType
              })
              response.write(file, 'binary');
              response.end();
            }
          })
        }
      })
    }
  })
})

server.listen(PORT);
console.log('server running at port:' + PORT);