//1. var 变量提升
console.log(m,f)
var m = 1223

function f(){
    console.log(m)   // 抛异常  let声明了 m  则在此作用域里 在let声明m之前 都无法触及（虽然外部声明了var m  但是已被let 声明的m覆盖）
    let m = 123
    console.log(123)
}

f()
