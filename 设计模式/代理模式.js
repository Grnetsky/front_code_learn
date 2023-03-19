// 为对象提供个代用品  可以理解为中间件  通过中间人去操作真正的对象

class Boy{
    constructor(flower) {
        this.flower = flower
    }
    sendFlower(to){
        to.receive(this.flower)
    }
}


class Girl{
    constructor() {
        this.flower = null
    }
    receive(f){
        this.flower = f
        console.log("收到了",f)
    }
}

class Proxy{
    constructor(who) {
        this.who = who
    }
    // 代理接口与本体接口一致性
    receive(f){
        this.flower = f
        console.log("收到了",f)
        if(f.number>=9){
            this.who.receive(f)
        }
        else{
            console.log("代理拒绝了，花太少兄弟！")
        }
    }
}
let b = new Boy({number:100})
let g = new Girl()
let p = new Proxy(g)
b.sendFlower(p)


