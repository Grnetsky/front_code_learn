// transform 转换流

async function* ints(){  //生成器
    for (let i = 0;i< 5 ;i++){
        yield await new Promise((resolve)=>{setTimeout(resolve,1000,i)})
    }
};

const { writable,readable } = new TransformStream({
    transform(chunk,controller){
        controller.enqueue(chunk * 2)
    }
})  //转换流
const readableStreamReader = readable.getReader()
const writeableStreamReader = writable.getWriter();
// 生产者
(async function () {
    for await (let chunk of ints()){
        await writeableStreamReader.ready
        writeableStreamReader.write(chunk)
    }
    writeableStreamReader.close()
})();

//消费者
(async function (){
    while (true){
        const {done,value} = await readableStreamReader.read()
        if(done){
            break
        }else {
            console.log(value)
        }
    }}
)()
