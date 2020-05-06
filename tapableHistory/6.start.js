const { AsyncParallelHook } = require('tapable');
// 异步的钩子（串行） 并行  需要等待所有并发的异步时间执行后再执行回调方法
// 同时发送多个请求
// 注册方法  分为  tap 注册   tapAsync 注册
// tapable 库中有三种注册方式  tab 同步注册  tabAsync（cb）  tabPromise（注册时promise）
//  call  callAsync  promise
class Lesson{
  constructor(){
    this.index = 0;
    this.hooks = {
      arch: new AsyncParallelHook(['name']),
    }
  }

  tap(){ // 注册监听函数
    this.hooks.arch.tapPromise('node', (name,cb)=>{
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          console.log('node', name);
          resolve();
        },1000)
      })
      
    })
    this.hooks.arch.tapPromise('react', function(name,cb){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          console.log('react', name);
          resolve();
        },1000)
      })
    })
  }
  start(){
    this.hooks.arch.promise('jw').then(function(){
      console.log('end')
    });
  }
}

let l = new Lesson();
l.tap(); // 注册者两个事件
l.start(); // 启动钩子