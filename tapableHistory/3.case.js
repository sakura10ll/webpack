class SyncWaterfallHook { // 钩子是同步的
  constructor(args){ // arrgs => ['name']
    this.task = [];
  }
  tap(name, task){
    this.task.push(task)
  }
  call(...args){
    let [first, ...others]  = this.task;
    let ret = first(...args);
    others.reduce((a,b)=>{
      return b(a);
    }, ret)
  }
}

let hook = new SyncWaterfallHook(['name']);
hook.tap('react', function(name){
  console.log('react', name);
  return 'react ok'
})
hook.tap('node', function(name){
  console.log('node', name);
  return 'node ok'
})
hook.tap('webpack', function(name){
  console.log('webpack', name);
})
hook.call('jw')
