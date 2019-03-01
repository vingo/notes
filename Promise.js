async function async1() {
	console.log('async1 start');
	await async2();
    console.log('async1 end');
    setTimeout(() => {
        console.log('ta1')
    }, 0);
}

async function async2() {
    console.log('async2 start');  
    // new Promise((res)=>{
    //     console.log('async2 promise')
    //     res()
    // }).then(() => {
    //     console.log('async2 then ')
    // })
    setTimeout(() => {
        console.log('ta2')
    }, 0);
}
console.log('start')
setTimeout(() => {
   console.log('t') 
   new Promise((res, rej)=>{
       res()
   }).then(() => {
       console.log('t promise')
   })
}, 0);
async1()
console.log('end')
console.log('>>>>>>>>>>>>>>>>>>')
function test() {
    console.log(1)
}
function x(){
    if(false) { 
        console.log(3)
        function test() {console.log(2)}
    }
    test() 
}
 x()