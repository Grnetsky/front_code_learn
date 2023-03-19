//1. var 变量提升
console.log(m,f)
var m = 1223

function f(){
    console.log(m)
    console.log(123)
}

f()
