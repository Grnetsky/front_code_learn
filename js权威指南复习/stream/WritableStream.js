//WriteableStream  可读流
async function* ints(){  //生成器
    for (let i = 0;i< 5 ;i++){
        yield await new Promise((resolve)=>{setTimeout(resolve,1000,i)})
    }
}

const writeable = new WritableStream({
    write(value){
     console.log(value)   // 调用write回调函数
    }
});

// 生产者
const writeableStreamController = writeable.getWriter();  // 获取write函数
(async function () {
    for await (let chunk of ints()){
        writeableStreamController.write(chunk)
    }
     writeableStreamController.close()

})()
