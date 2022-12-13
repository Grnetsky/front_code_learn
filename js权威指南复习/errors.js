class MyError extends Error{
    constructor(message,line) {
        super(message+line+
        '出错了');
    }
}

let a = new MyError('我的错误',100)
console.log(a.toString())


// let m = {b:1,toJSON:()=>{return '123123'}}
let m = {a:{},b:2,c:3}


// console.log(m,JSON.stringify(m))
JSON.parse(JSON.stringify(m,function (k,v) {
    console.log('stringfiy:'+typeof k+v)
    return v
}),function (k,v) {
    console.log('parase:'+k+v)
    return v
})
