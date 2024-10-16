
//当被GC(垃圾回收)的时候就会调用这里面的回调函数
const finalRegistry = new FinalizationRegistry(()=>{
    console.log("某一个对象被回收了 ");
})



function close() {
    let close_var = {}
    finalRegistry.register(close_var,'')
    return (a,b)=>{
        close_var[a] = b
        return close_var
    }
}


let c = close()
let m = c('a',1)
//置为空，让obj在下轮中被垃圾回收掉
c = null
m = null
//因为GC不是马上就回收的，它会在CPU空闲的时候进行回收，所以在一定间隔之后就会进行回收处理，然后触发我们的回调
