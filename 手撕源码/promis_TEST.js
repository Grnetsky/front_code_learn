// const PENDING = 'pending';
// const FULFILLED = 'fulfilled';  //兑现
// const REJECTED = 'rejected'; // 拒绝
//
// function MyPromise(executor){
//     if(typeof executor !== 'function'){
//         throw new Error("传参必须为函数")
//     }
//     this.state = PENDING
// }

// for(let i=0;i<undefined;i++){console.log(123)


// syncFn((resolve,reject)=>{setTimeout(()=>console.log("aaa"),5000)}).then((value)=>{console.log(value)}).then((err)=>console.log("then:",err))


let syncA = new Promise((resolve, reject)=>{
    setTimeout(()=>{console.log(6666)},5000)
})

syncA.then(value=>console.log(value)).then(value=>console.log('2:',value))
let b = Promise.resolve('ojk')
let c = b.then(()=>{''})
console.log(c)
let d = c.then((v)=>{console.log(v)})


