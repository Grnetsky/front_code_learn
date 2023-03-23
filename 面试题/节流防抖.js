// 所谓节流  就是一段时间内 只允许执行一次操作
function throttle(fun,second){
    let timer = null
    return function () {
        if(timer)return
        timer = setTimeout(()=>{
            fun()
            timer = null
        },second*1000)
    }
}
