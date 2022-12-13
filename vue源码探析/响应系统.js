const bucket = new WeakMap()   // 消息队列
let activeEffect
var data = {}
let obj = new Proxy(data,{
    set(target, p, value, receiver) {  // 更改属性  =》执行副作用函数\
        console.log(`set ${target} ${p} ${value}`)
        trigger(target,p)
        return Reflect.set(target,p,value) // 设置值
    },
    get(target, p, receiver) {  //获取值  将副作用函数注册到队列中
        console.log(`get ${target} ${p}`)
       track(target,p)
        return Reflect.get(target,p)
     },
    deleteProperty(target, p) {
        return Reflect.deleteProperty(target,p)
    },
})

function track(target,p) {
    if(!activeEffect)return Reflect.get(target,p)
    let depMaps = bucket.get(target) // 获取depMaps
    if(!depMaps)depMaps.set(target,(depMaps = new Map())) // 不存在则创建 TODO：注意写法
    let deps = depMaps.get(p) // 获取对象对应属性上的副作用函数队列
    if (!deps)deps = depMaps.set(p,(deps = new Set())) // 当队列不存在 则创建队列
    deps.add(activeEffect) // 将副作用函数注册到队列中
}

function trigger(target,p){
    let depsMap = bucket.get(target) // 获取关于这个对象的所有副作用函数集合
    if(!depsMap)return
    let effects = depsMap.get(p)   // 获取这个对象某个属性相关的副作用函数
    effects && effects.forEach((fn)=>fn())  // 执行副作用函数
}

function effect(fn) {
    activeEffect = fn   // 全局变量指向副作用函数
    fn()   // 执行副作用函数
}
