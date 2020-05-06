const { SyncLoopHook } = require('tapable');
// 同步 遇到某个函数不返回 undefined 监听函数会执行多次
class Lesson{
  constructor(){
    this.index = 0;
    this.hooks = {
      arch: new SyncLoopHook(['name']),
    }
  }

  tap(){ // 注册监听函数
    this.hooks.arch.tap('node', (name)=>{
      console.log('node', name);
      return ++this.index === 3 ? undefined : '继续学'
      // return 'node学的还不错'
    })
    this.hooks.arch.tap('react', function(name){
      console.log('react', name);
    })
  }
  start(){
    this.hooks.arch.call('jw');
  }
}

let l = new Lesson();
l.tap(); // 注册者两个事件
l.start(); // 启动钩子