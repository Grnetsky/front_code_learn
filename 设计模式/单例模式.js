// 单例模式
// 普通单例模式

// 构造函数
let singleton = function (name) {
    this.name = name
}
// 用instance指向这个对象
singleton.instance = null
singleton.getInstance = function (name) {
    if (!this.instance){
        this.instance = new singleton(name)
    }
    return this.instance
}
let o1 = singleton.getInstance('hhh')   //
let o2 = singleton.getInstance('aaa')   // 这个本质上没用
console.log(o2 == o1) // true
console.log(o2.name,o1.name) // hhh hhh

// 类的单例模式
class Singleton{
    static instance = null  // 核心就在用一个变量保存这个对象，创建对象前就去查看是否有对象
    constructor(name) {
        console.log(Singleton.instance)
        if(!Singleton.instance){
            console.log("创造对象")
            this.name = name
            Singleton.instance = this
            return this
        }
        return Singleton.instance
    }
    say(){
        return this.name
    }
}
let s1 = new Singleton("蔡豪")
let s2 = new Singleton("666")
console.log(s1==s2,s1.name,s2.name,s1.say(),s2.say())
