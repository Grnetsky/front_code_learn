let a = [1,2,3]
let pa = new Proxy(a,{
    get(target, p, receiver) {  // target 目标对象  p 属性  receiver 代理对象本身
        return Reflect.get(target,p)
    },
    set(target, p, value, receiver) {
        console.log(target,p,value,receiver)
        return Reflect.set(target,p,value)
    }
})

pa[1] = 666
pa[2] = 33
pa.bbb = 661233
pa.c = 1222


// 撤销代理
let {proxy_p,revoke } = Proxy.revocable(a,{
    get(target, p, receiver) {
        return "bbb"
    }
})
// console.log(proxy_p[1])


let b = {
    i : 0,
    toString : function () {
        return this.i += 1
    },
    valueOf:function () {
        return 1
    }
}

console.log(b==1 && b==2 && b==3)
