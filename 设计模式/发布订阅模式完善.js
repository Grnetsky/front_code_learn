// 定义发布者
class Publisher {
    constructor() {
        this.listenList = {}  // 定义消息队列 对象形式 方便声明多个事件名
    }
    on(event,fn){
        if(!this.listenList[event]){
            this.listenList[event] = []  // 队列中没有这个事件则创建事件
        }
        this.listenList[event].push(fn)  // 追加事件到队列

    }
    trigger(event){     // 触发事件
        this.listenList[event]?.fojrEach((fn)=>{  // 从对应的队列里依次触发事件
            fn.apply(this,arguments)
        })
    }
    remove(event,fn){
        this.listenList[event].splice(this.listenList[event].indexOf(fn),1)  // 取消事件监听
    }

}
var publisher = new Publisher()
class Subscript{
    constructor() {
    }
    addEventListener(event,fn){
        publisher.on(event,fn)
    }
    remove(event,fn){
        publisher.remove(event,fn)
    }
}

let a = new Subscript()
let b = new Subscript()
let fun = ()=>{console.log("a执行点击函数")}

a.addEventListener('click',fun)
b.addEventListener('click',()=>{console.log("b执行点击函数")})
// a.remove('click',fun)


publisher.trigger('click')


let login = {}
login.listenList = []
login.listen = function (fn) {
    this.listenList.push(fn)
}

login.trigger = function () {
    this.listenList.forEach((fn)=>{
        fn()
    })
}

login.listen(()=>{console.log("login1")})
login.listen(()=>{console.log("login2")})

login.trigger()
