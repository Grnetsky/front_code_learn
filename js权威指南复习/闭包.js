function foo() {
    let a = 1
    function bar(){
        return a++
    }
    return bar
}
let baz = foo()
console.log(baz()) //1
console.log(baz()) //2  闭包会保存词法作用域 不会被垃圾回收机制回收  函数栈（栈顶的函数未弹出 栈底的函数永远弹出不了）
function foo() {
    console.log(a)
}
function bar() {
    var a = 3
    foo()
}
var a = 2
bar()

function foo(a) {
    return a
}

var old = foo.name
foo.name = 'bar'
console.log(old,foo.name)
console.log(foo(111))
