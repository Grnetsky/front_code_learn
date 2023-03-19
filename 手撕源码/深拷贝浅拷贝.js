// 深拷贝
function deepClone(target, obj){
    for(let i in obj){
        console.log(i)
        if(obj[i] instanceof Array){
            let _t = []

        }
    }}

// 深拷贝的循环引用如何解决？用map解决
let a = [1,2,3,[4,5],{b:222}]
let b = a.slice(1)
console.log(b)
b[2][0] = 666
b[3].b = 0
console.log(b)
console.log(a)
