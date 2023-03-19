
let p = new Promise((resolve, reject)=>{
    console.log(1)
    resolve() //表示期约被解决 还会继续往下执行 不会执行reject函数
    console.log(2)
    reject()
})
setTimeout(()=>{
    console.log(7)},0)

p.then(()=>{console.log(3)}).then(()=>{console.log(4)}).catch(()=>{
    console.log(5)})
console.log(6)

//输出
// 1
// 2
// 6
// 3
// 4
// 5
