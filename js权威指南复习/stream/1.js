function* func() {
    for(let i=0;i<5;i++){
        yield new Promise((resolve)=>{setTimeout(resolve,1000,i)})
    }}

async function func2() {
    for await (let i of func()){
        console.log(i)
    }
}

console.log(func().next().value,func().next().value,func().next().value)  // promise promise promise
func2() // 0 1 2 3 4
