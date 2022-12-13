const workerScript =
self.onmessage = ({data})=>{
    const view = new Uint32Array(data)
    for (let i = 0;i<1E6;i++){
        view[0]+=1 // v
    }
}
