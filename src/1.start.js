const { AsyncSeriesHook } = require('tapable'); // 异步串行
class Lesson{
  constructor(){
    this.index = 0;
    this.hooks = {
      arch: new AsyncSeriesHook(['name']),
    }
  }

  tap(){ // 注册监听函数
    this.hooks.arch.tapAsync('node', (name,cb)=>{
      setTimeout(()=>{
        console.log('node', name);
        cb()
      },1000)
    })
    this.hooks.arch.tapAsync('react', function(name,cb){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          console.log('react', name);
          resolve();
        },1000)
      })
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