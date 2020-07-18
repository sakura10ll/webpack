class SyncLoopHook { // 钩子是同步的
  constructor(args){ // arrgs => ['name']
    this.task = [];
  }
  tap(name, task){
    this.task.push(task)
  }
  call(...args){
    this.task.forEach(item=>{
      let ret;
      do{
        ret = item(...args);
      }while(ret !== undefined);
    })
  }
}

let hook = new SyncLoopHook(['name']);
let total = 0;
hook.tap('react', function(name){
  console.log('react', name);
  return ++total === 3 ? undefined : 'react ok';
})
hook.tap('node', function(name){
  console.log('node', name);
  // return 'node ok'
})
hook.tap('webpack', function(name){
  console.log('webpack', name);
})
hook.call('jw')
