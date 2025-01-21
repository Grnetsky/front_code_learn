var obj = {
  func(){console.log('func')},
  b2:{
    c:1
  },
  _property1:{
    c:1
  }
};

// 你的自定义 Object.defineProperty 方法

// 你的自定义拦截器
obj.__defineGetter__('func', function() {
  console.log('func getter called!');
  return this._property1;
});

obj.__defineSetter__('func', function(value) {
  console.log('func setter called with value: ' + value);
  this._property1 = value; // 实际设置属性的值
});

obj.__defineSetter__('b', function(value) {
  console.log('b setter called with value: ' + value);
  this._property2 = value; // 实际设置属性的值
});
obj.__defineGetter__('b', function() {
  console.log('b getter called!');
  return this._property2;
});

console.log(obj.b)
// obj.b.c = 3
//
// // 尝试修改 property1
// obj.func = ()=>{console.log("change")};
// console.log(obj.func);
//
// console.log(11111)
// let b = Object.assign({},obj)
// console.log(22222)
// console.log(b.func)
// b.func = ()=>{
//   console.log("change b func")
// }
// b.func()