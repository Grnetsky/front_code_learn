function f(a) {
    console.log(a)
    a = {d:123}
}


let obj = {
    a:1,
    b:2,
    c:3
}
for (i in obj){
    f(obj[i])
}

console.log(obj)
let arr = [1,2,3]
for (let i of arr){
    arr.push(i++)
    console.log(i)
}


