// 发布订阅模式

// es5
let publisher = {}
publisher.listenList = []
publisher.subscript = function (fn) {
    this.listenList.push(fn)
}

publisher.publish = function (){
    this.listenList.forEach((fn)=>{
        fn(arguments)
    })
}


publisher.subscript(function () {
    console.log("小明注册了",arguments)
})
publisher.subscript(function () {
    console.log("小红注册了",arguments)

})
setTimeout(()=>{publisher.publish("2秒后发布")},2000)

//es6
class Publisher{
    constructor() {
        this.listenList = []
    }
    // 订阅
    subscript(fn){
        this.listenList.push(fn)
    }

    //发布
    publish(){
        this.listenList.forEach((fn)=>{
            fn(arguments)
        })
    }
    remove(){

    }
}
let publish1 = new Publisher()
// publish1.subscript(function () {
//     console.log("小明订阅")
// })
//
// publish1.subscript(function () {
//     console.log("小红订阅")
// })
//
// publish1.publish()


class Subscriptor{
    constructor() {
    }
    on(publisher,fn){
        publisher.subscript(fn)
    }
    remove(){
    }
}
let s = new Subscriptor()
s.on(publish1,function () {
    console.log("回调函数触发成功")
})
publish1.publish()

let list = []
let fns = [function () {
    console.log(1)
},function () {
    console.log(2)
}]
for(var i = 0,fn;fn = fns[i++];){
    fn()
}
