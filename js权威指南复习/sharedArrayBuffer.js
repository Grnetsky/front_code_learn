//TODO 此对象在web中已禁用
const workerScript = sharedArrayBuffer

self.onmessage =
({data})=>{
    const view = new Uint32Array(data)
    for (let i = 0;i<1E6;i++){
      //   Atomics.add(view,0,1) // 原子性  线程安全
        view[0]+=1
    }

    self.postMessage(null)
}

const workerScriptBlobUrl = URL.createObjectURL(new Blob([workerScript]))

const  workers = []
for (let i = 0;i< 4 ;i++){
    workers.push(new Worker(workerScriptBlobUrl))
}
let responseCount = 0

for (const worker of workers ){
    worker.onmessage =()=>{
        if(++responseCount === worker.length){
            console.log(`final counte ${view[0]}`)
        }

    }
}
const sharedArrayBuffer = new SharedArrayBuffer(4)   // 注意 浏览器中因为安全原因已经禁用了SharedArrayBuffer对象

const view = new Uint32Array(sharedArrayBuffer)
view[0] = 1

for(const worker of workers){
    worker.postMessage(sharedArrayBuffer)
}
