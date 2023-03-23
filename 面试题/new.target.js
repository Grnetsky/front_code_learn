//function
function f() {
    console.log(new.target)
}
let a = new f()
f()
