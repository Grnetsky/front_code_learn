function test(a,b,c,d){
    console.log(arguments,a,b,c,d)
}
let a = {b:1}
test`1,2,${a}3${a}`
//[Arguments] { '0': [ '1,2,', '3', '' ], '1': { b: 1 }, '2': { b: 1 } } [ '1,2,', '3', '' ] { b: 1 } { b: 1 } undefined
