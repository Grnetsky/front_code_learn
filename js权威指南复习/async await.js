function f() {
    return new Promise((resolve, reject)=>{
        setTimeout(reject,1000,111)
    })
}

// try catch 可以捕获内部promise异常
async function main() {
    try {
        const x = await f()   // 代码停在这了  所以可以被捕获
        console.log(x,123)
    }catch (e) {
        console.log(e,"err")
    }

}
main()

