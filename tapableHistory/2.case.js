class SyncBailHook { // 钩子是同步的
  constructor(args){ // arrgs => ['name']
    this.task = [];
  }
  tap(name, task){
    this.task.push(task)
  }
  call(...args){
    let ret; // 当前这个函数的返回值
    let index = 0; // 当前先执行第一个
    do{
      ret = this.task[index++](...args);
    }while(ret === undefined && index < this.task.length);
  }
}

let hook = new SyncBailHook(['name']);
hook.tap('react', function(name){
  console.log('react', name);
  return '停止向下执行'
})
hook.tap('node', function(name){
  console.log('node', name);
})
hook.call('jw')
