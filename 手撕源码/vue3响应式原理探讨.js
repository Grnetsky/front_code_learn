
let data = []
// 发布订阅+单例模式
class EffectList{
    static instance = null
    constructor() {
        // 单例模式 保证全剧只有一个Effect发布订阅器
        if(EffectList.instance)return EffectList.instance
        EffectList.instance = this
        this.list = []
    }
    // 添加到队列
    add(fn){
        this.list.push(fn)
    }
    // 数据更改发布订阅 通知更新
    publish(){
        this.list.forEach(i=>i())
    }
}

let p = new Proxy(data,{
    // 设置值
    set(target, p, value, receiver) {
        console.log("修改了",target,'的',p,'为',value,'这是receiver：',receiver)
        return Reflect.set(target,p,value)
    },
    // 获取值
    get(target, p, receiver) {
        console.log("获取了",target,'的',p,'这是receiver：',receiver)
        return Reflect.get(target,p)
    },
    // 删除值
    deleteProperty(target, p) {
    }
})

// proxy能监听到数组改变
p[0] = 100
p[0]
p[0] = 200
p[0]

let a = function () {
    console.log('a')
}
a.b = 123
a.c = function(){
    console.log("vccccccf")
}


a()
a.b
a.c()
