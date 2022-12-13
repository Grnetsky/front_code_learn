function add(a,b) {
    console.log(arguments,arguments.callee,arguments.callee.caller)
    return a+b
}
// arguments.callee => 指向该函数本身 为了 给递归函数命名解耦使用
// argument.callee.caller => 指向的调用该函数的函数   即外层函数   若为全局对象  则为null
// 在es5中 严格模式下是禁止使用callee 和caller的  原因是为了安全 防止第三方代码窥探源代码
add(1,2,3)

// class A {
//     constructor(name) {
//         this.say = ()=>{
//             console.log(name)
//         }
//     }
//     speak(){
//         console.log("speak")
//
//     }}
//
// A.prototype.x = ()=>{
//     console.log('x')}
//
//
// let m = new A()
// console.log(m)
// A.o = ()=>{
//     console.log('ok')}
// A.o()


// let m = new Promise((resolve)=>{
//     console.log(1)
//     resolve(2)
//     console.log(3)
// })
// m.then((x)=>{
//     console.log(x)
// })
