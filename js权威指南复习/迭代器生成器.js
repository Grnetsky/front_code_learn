
// 迭代器
class Iter {
    constructor() {
    }
    // 迭代方法 属性名为 Symbol.iterator
    // [Symbol.iterator](){   // 迭代器方法  这个方法返回迭代器对象
    //     let i = 1 // 逻辑变量
    //     return {   // 迭代器对象  里面必须要有 next 方法  这个 next方法返回
    //         next(){
    //             return  i<10?
    //                 {value:i++,done:false}
    //                 :{done:true}
    //         },
    //         return(){
    //             console.log("停止迭代 调用return")
    //             return {
    //                 done:true
    //             }
    //         },
    //         [Symbol.iterator](){  // 为了方便 让迭代器本身也可以迭代
    //             return this
    //         }
    //
    //     }
    // }
    *[Symbol.iterator](){
        for(let i = 0;i<10;i++){
            yield i
        }
    }
}

let i = new Iter()
for(let x of i){
    if(x === 7){
        break
    }else{
        console.log(x)
    }
}
let it = i[Symbol.iterator]()
console.log([...i],it.next(),it.next())


// 生成器
function* creator() {
    console.log('1-----------')
    yield 1
    console.log('2-----------')
    yield 2
    console.log('3-----------')
    yield 3
}

let a = creator()
console.log(a.next().value)  //1
console.log(a.next().value)  //2
console.log(a.next().value)  //3
console.log(a.next().done)   //true
