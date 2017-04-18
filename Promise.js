/*
* exec multiple promise function by order.
*/
let funcA=function(){return Promise.resolve('A');};
let funcB=function(){return Promise.resolve('B');};
let funcC=function(){return Promise.resolve('C');};

let getResult=function(results,val){
   results.push(val);
   return results;
};

let tasks=[funcA,funcB,funcC];

let queueExecPromiseByStep=function(tasks){
  tasks=tasks||[];
  let results=getResult.bind(null,[]);   //use bind to keep content scope.
  return tasks.reduce((pre,next)=>{
        return pre.then(next).then(results);
  },Promise.resolve());
}

queueExecPromiseByStep(tasks).then(r=>{console.log(r);}).catch(ex=>{console.log(ex);});// echo : ['A','B','C'];






