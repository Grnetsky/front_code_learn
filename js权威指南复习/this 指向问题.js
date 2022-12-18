//
let obj1 = {
    name:"obj1_name",
    say:()=>{
        console.log(this.name)
    }
}

let obj1 = {
    name:"obj1_name",
    say:(()=>{
        console.log(this.name)
    })
}


