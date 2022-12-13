function f() {
    return ()=>{
        console.log(this.a)
    }
}

let obj1 = {
    a:2
}

let obj2 = {
    a:3
}

let ff = f.call(obj1)
console.log(ff)
