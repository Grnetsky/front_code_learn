

// let f = 123
// function f() {
//     console.log("f")
// }
//
// console.log(f)
"use strict"

let a = {c:2}
let m = Object.create(a)
console.log(m.b)
m.b = 3
console.log(m.b,a,m)
