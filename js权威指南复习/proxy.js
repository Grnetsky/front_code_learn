// function onChange(target, callback) {
//     const handler = {
//         get(target, property, receiver) {
//             // 用于访问属性值的拦截器
//             try {
//                 return new Proxy(target[property], handler);
//             } catch (err) {
//                 return Reflect.get(target, property, receiver);
//             }
//         },
//         defineProperty(target, property, descriptor) {
//             // 用于属性赋值的拦截器
//             const result = Reflect.defineProperty(target, property, descriptor);
//             callback(target);
//             return result;
//         },
//         deleteProperty(target, property) {
//             // 用于拦截删除属性的操作
//             const result = Reflect.deleteProperty(target, property);
//             callback(target);
//             return result;
//         }
//     };
//
//     return new Proxy(target, handler);
// }
//
// // 使用示例
// const obj = onChange({ a: 1 }, function(obj) {
//     console.log('Object changed:', obj);
// });
//
// obj.a = 2; // 控制台输出：Object changed: { a: 2 }
// obj.b = 3; // 控制台输出：Object changed: { a: 2, b: 3 }
// delete obj.a; // 控制台输出：Object changed: { b: 3 }


let obj2 = {
    name:'obj',
    say(){
        console.log(this.name)
    }
}

let p = new Proxy(obj2,{
    get(target, p, receiver) {
        console.log('get')
        debugger

        return Reflect.get(target,p)
    },
    set(target, p, newValue, receiver) {
        console.log('set',p,newValue)
        return Reflect.set(target,p, newValue)
    }
})
p.name = {h:1}
console.log(p.name)
p.name.h = 2
console.log('xxxxx')
console.log(p.name.h)
// set name { h: 1 }
// get
// { h: 1 }
// get  // 这里是因为设置p.name.h本质是先获取p.name的对象再设置其值
// xxxxx
// get
// 2
