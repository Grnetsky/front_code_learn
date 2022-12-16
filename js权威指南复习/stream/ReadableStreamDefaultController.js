// ReadableStream  可读流
async function* ints(){  //生成器
    for (let i = 0;i< 5 ;i++){
        yield await new Promise((resolve)=>{setTimeout(resolve,1000,i)})
    }
}

const readableStream = new ReadableStream({
        async start(controller){   // start函数 controller位
            console.log(controller)
            for await (let chunk of ints()){
                controller.enqueue(chunk)
            }
            controller.close()
        }
});

let readableStreamDefaultReader = readableStream.getReader();  // 获取读取器对象
(async function (){
    for(;;){
        const {done,value} = await readableStreamDefaultReader.read() //消费者
        console.log(done,value)
        if(done)break
}}
)();
