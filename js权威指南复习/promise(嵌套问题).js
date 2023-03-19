// function syn(fn){
//     if(typeof fn !== 'function'){
//
//     }
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{fn()},1000)
//         throw new Error(123)
//     })
// }
//
// syn(()=>{
//     console.log("执行函数")
// }).then((d)=>console.log(d)).catch((e)=>{
//     console.log('err:',e)})
//

Promise.resolve().then(() => {
    console.log(0);
    return new Promise(resolve => {   // 在一个promise中返回另一个promise 则外部promise的状态由内部promise执行完后决定 ！！！！！！ 每遇见一个then 就会返回一个新promise 则向微任务队列中追加一个执行函数
        resolve(4)
    })
        .then(res => {
            return res
        })
        // 新增第二个 then
        .then (res => {
            return res
        })
}).then(res => {
    console.log(res)
})

Promise.resolve()
.then(()=>{
    console.log(1)
}).then(()=>{
    console.log(2)
}).then(()=>{
    console.log(3)
}).then(()=>{
    console.log(5)
}).then(()=>{
    console.log(6)
    console.log("===========")
})

// Promise.resolve().then(() => {
//     console.log(0);
//     return new Promise(resolve => {   // 在一个promise中返回另一个promise 则外部promise的状态由内部promise全部执行完后决定 ！！！！！！ 每遇见一个then 就会返回一个新promise 则向微任务队列中追加一个执行函数
//         resolve(4)
//     })
//         .then(res => {
//             return res
//         })
//         // 新增第二个 then
//         .then (res => {
//             return res
//         })
// }).then(res => {
//     console.log(res)
// })
//
// Promise.resolve()
//     .then(()=>{
//         console.log(1)
//     }).then(()=>{
//     console.log(2)
// }).then(()=>{
//     console.log(3)
// }).then(()=>{
//     console.log(5)
// }).then(()=>{
//     console.log(6)
// })


//
// function asy() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{resolve(1)},1000)
//     })
// }
// asy().then((value)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{console.log(value);resolve(2)},1000)
//     })
// }).then((value)=>{
//     // return new Promise((resolve, reject)=>{
//     //    // setTimeout(()=>{console.log(value);resolve(3)},1000)
//     //     return Promise.resolve(3)
//     // })
//     console.log(value)
//     return  Promise.resolve(3)
//
// })
//     .then((value)=>{
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{console.log(value);resolve(4)},1000)
//         })
//     })
//
//
//
// let m = Promise.resolve('foo')
// let m2 = m.then()
// setTimeout(console.log,1000,m2)


// var a = {}
// var b = Object.prototype
// var c = Object.create(Object.prototype)
// console.log(a.__proto__ == b,a instanceof Object,c.__proto__,Object.prototype.constructor)
//
// let px = new Promise((resolve)=>{
//     setTimeout(resolve,1000,'解决')
// })
// function pf() {
//     let x = ''
//     px.then((v)=>{
//         x = v
//     })
//     return x
// }
//
// console.log(px.then(pf)
// )
//
//
