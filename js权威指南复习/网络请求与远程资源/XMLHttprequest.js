let xhr = new XMLHttpRequest()

xhr.onreadystatechange = function (){
    if(xhr.readyState === 4){
        console.log(xhr.responseText)
        const userdata = JSON.parse(xhr.responseText)// 无论什么响应类型都会保存在requestText中
        console.log(userdata)
        xhr.getResponseHeader('MyHeader') // 获取响应头
        console.log(xhr.getAllResponseHeaders())  //获取所有响应头
    }else {
        console.log("connect fail",xhr.readyState)

    }}
xhr.open('post','http://127.0.0.1:8000/register/',true)  // 从服务器获取信息
let formdata = new FormData()
// xhr.setRequestHeader('Content-Type','application/x-www-formdata')  //使用formdata数据则不用显示设置请求头类型了
formdata.append("username","test2")
formdata.append("password","123")

// xhr.setRequestHeader("MyHeader",'MyVlaue')  //设置请求头
// xhr.abort() // 取消请求
xhr.timeout = 1000 //设置超时时间 ms
xhr.ontimeout = ()=>{    // 请求超时后会中断请求 并且readState变为4
    console.log("请求超时")
}

// xhr.overrideMimeType("text/xml") //重写响应回来的数据类型
// 事件

xhr.onload = (e)=>{   // 当响应接收完成后立即触发
    console.log(e)   //e.target === xhr
}

xhr.onerror = (e)=>{ //在请求错误时触发
    console.log(e)
}

xhr.onabort = (e)=>{ //当调用abort时触发
    console.log(e)
}

xhr.onprogress = (event)=>{ // 在接受响应期间反复触发   可用来提供进度信息
    console.log(event)  // event.target === xhr  event.lengthComputable:信息是否可用   event.position: 接受到的字节数   event.totalSize:Content-Type的总字节数
}

xhr.send(formdata)

