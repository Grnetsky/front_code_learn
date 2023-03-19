let n = {obj2:88}
let m = {obj:n}
let a = {b:1,c:"str",d:66,e:Symbol("123"),f:m}
let copya = JSON.stringify(a)
console.log(a)
m.obj.obj2 = 0
console.log(a,m)
console.log(copya)
