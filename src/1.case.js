class AsyncSeries { // 钩子是同步的
  constructor(args){ // arrgs => ['name']
    this.task = [];
  }
  tapAsync(name, task){
    this.task.push(task)
  }
  callAsync(...args){
    let finalCallback = args.pop();
    let index = 0;
    let next = () =>{
      if(this.task.length === index){
        return finalCallback();
      }
      let task = this.task[index++];
      task(...args, next);
    }
    next();
  }
}

let hook = new AsyncSeries(['name']);
let total = 0;
hook.tapAsync('react', function(name,cb){
  setTimeout(()=>{
    console.log('react', name);
    cb();
  },1000)
})
hook.tapAsync('webpack', function(name,cb){
  setTimeout(()=>{
    console.log('webpack', name);
    cb();
  },1000)
})

hook.callAsync('jw',()=>{
  console.log('end')
})
