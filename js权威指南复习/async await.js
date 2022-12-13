function f() {
    return new Promise((resolve, reject)=>{
        setTimeout(reject,1000,111)
    })
}

async function main() {
    try {
        const x = await f()
        console.log(x,123)
    }catch (e) {
        console.log(e,"err")
    }

}
main()

