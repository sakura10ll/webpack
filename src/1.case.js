class AsyncSeriesWaterfallHook { // 钩子是同步的
  constructor(args){ // arrgs => ['name']
    this.task = [];
  }
  tapAsync(name, task){
    this.task.push(task)
  }
  callAsync(...args){
    let finalCallback = args.pop();
    let index = 0;
    let next = (err, data) =>{
      let task = this.task[index];
      if(!task) return finalCallback();
      if(index ===0){
        task(...args, next);
      }else{
        task(data,next);
      }
      index++
    }
    next();
  }
}

let hook = new AsyncSeriesWaterfallHook(['name']);
let total = 0;
hook.tapAsync('react', function(name,cb){
  setTimeout(()=>{
    console.log('react', name);
    cb(null, '结果');
  },1000)
})
hook.tapAsync('webpack', function(name,cb){
  setTimeout(()=>{
    console.log('webpack', name);
    cb(null);
  },1000)
})

hook.callAsync('jw',()=>{
  console.log('end')
})
