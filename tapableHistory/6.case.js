class AsyncParallelHook { // 钩子是同步的
  constructor(args){ // arrgs => ['name']
    this.task = [];
  }
  tapPromise(name, task){
    this.task.push(task)
  }
  promise(...args){
    let newTask = this.task.map(task=>task(...args));
    return Promise.all(newTask);
  }
}

let hook = new AsyncParallelHook(['name']);
let total = 0;
hook.tapPromise('react', function(name,cb){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log('react', name);
      resolve();
    },1000)
  })
})
hook.tapPromise('webpack', function(name,cb){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log('webpack', name);
      resolve();
    },1000)
  })
})

hook.promise('jw').then(()=>{
  console.log('end')
})
