let obj = {name:"小余",age:20}

//当被GC(垃圾回收)的时候就会调用这里面的回调函数
const finalRegistry = new FinalizationRegistry(()=>{
    console.log("某一个对象被回收了 ");
})

//调用register(寄存器)进行注册任何我们想要清理回调的对象
finalRegistry.register(obj)//此时不会生效
//置为空，让obj在下轮中被垃圾回收掉
obj = null
//因为GC不是马上就回收的，它会在CPU空闲的时候进行回收，所以在一定间隔之后就会进行回收处理，然后触发我们的回调


