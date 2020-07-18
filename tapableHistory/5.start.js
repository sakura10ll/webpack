const { AsyncParallelHook } = require('tapable');
// 异步的钩子（串行） 并行  需要等待所有并发的异步时间执行后再执行回调方法
// 同时发送多个请求
// 注册方法  分为  tap 注册   tapAsync 注册
class Lesson{
  constructor(){
    this.index = 0;
    this.hooks = {
      arch: new AsyncParallelHook(['name']),
    }
  }

  tap(){ // 注册监听函数
    this.hooks.arch.tapAsync('node', (name,cb)=>{
      setTimeout(()=>{
        console.log('react', name);
        cb();
      },1000)
    })
    this.hooks.arch.tapAsync('react', function(name,cb){
      setTimeout(()=>{
        console.log('react', name);
        cb();
      },1000)
    })
  }
  start(){
    this.hooks.arch.callAsync('jw',function(){
      console.log('end')
    });
  }
}

let l = new Lesson();
l.tap(); // 注册者两个事件
l.start(); // 启动钩子