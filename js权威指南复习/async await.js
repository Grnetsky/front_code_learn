// function f() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(reject,1000,111)
//     })
// }
//
// // try catch 可以捕获内部promise异常
// async function main() {
//     try {
//         const x = await f()   // 代码停在这了  所以可以被捕获
//         console.log(x,123)
//     }catch (e) {
//         console.log(e,"err")
//     }
//
// }
// main()
//
// async function test(){
//     return 666
// }
// let p = test().then((v)=>{
//     console.log(11)})
// console.log(p)
//
//
// function x() {
//     try {
//         console.log("trg")
//         throw new Error("aa")
//         return 'try'
//     }
//     catch (e) {
//         console.log("catch")
//         return "catch return"
//     }
//     finally {
//         console.log("finally")
//         return "final"
//     }
// }
//
// console.log(x())
//

async function f1() {
    console.log('f1')
    return await 2
}

console.log(1)
console.log(f1().then((v) => console.log(v)))
console.log(3)