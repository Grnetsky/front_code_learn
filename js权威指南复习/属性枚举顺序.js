let obj = {'-3':3,'2':2,'1':1,[Symbol(1)]:'symbol','a':'a','-b':'-b'}
for (let i in obj){
    console.log(i)
}

let jc = Object.create(obj)
jc.m = 'm'

for (let i in jc){
    console.log(i)
}


let o = Object.assign(jc) // Object.assign 复制自身可枚举属性和符号属性  set/get 会被调用 不会被复制
console.log(o)
// 1.按字符串为非负整数>负整数>字符串(添加顺序)>符号


let arr = [1,2,[3,,3],[3,[4]],5]
console.log(arr)
arr.forEach(i=>{
    console.log(i)
})
console.log(Object.entries(arr))
console.log(arr.flat(1))

function n(a,b,...x) {
    console.log(a,b,x)
}

console.log(...arr)


let scope = 'global'

function F() {
    let scope = 'F'
    function FF() {
        return new Function('return scope')  // Function关键字使用的是全局的变量
    }
    return FF()
}

console.log(F())

let af = () => {console.log(123)}
let bf = function () {
    console.log(3343)
}
console.log(af instanceof Function)
console.log(af.prototype,bf.prototype)
