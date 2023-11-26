function initInnerLocalDevice() {
    let localDevice = {
        audioIn:[],
        videoIn:[],
        audioOut:[]
    }
    let constrains = {
        audio:true,
        video:true
    }

    if(!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices()){
        console.log("你的浏览器不支持获取媒体设备")
        return
    }

    //
    navigator.mediaDevices.getUserMedia(constrains).then((stream)=>{
        stream.getTracks().forEach(track=>{
            track.stop()
        })
    })

    navigator.mediaDevices.enumerateDevices().then((devices)=>{
        console.log(devices)
        devices.forEach((device)=>{
            let obj = { id:device.deviceId, kind:device.kind,label:device.label}
            if(device.kind === 'audioinput'){
                if(localDevice.audioIn.filter(e=>e.id === device.deviceId).length === 0){
                    localDevice.audioIn.push(device)
                }
            }else if(device.kind === 'audiooutput'){
                if(localDevice.audioOut.filter(e=>e.id === device.deviceId).length === 0){
                    localDevice.audioOut.push(device)
                }
            }else if(device.kind === 'videoinput'){
                if(localDevice.videoIn.filter(e=>e.id === device.deviceId).length === 0){
                    localDevice.videoIn.push(device)
                }
            }
        })
        console.log(localDevice)
    }).catch((e)=>{
        alert('摄像无法正常调用')
    })
}


initInnerLocalDevice()