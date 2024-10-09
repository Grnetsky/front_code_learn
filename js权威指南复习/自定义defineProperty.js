var obj = {func(){console.log('func')}};

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

// 尝试修改 property1
obj.func = ()=>{console.log("change")};
console.log(obj.func);

console.log(11111)
let b = Object.assign({},obj)
console.log(22222)
console.log(b.func)
b.func = ()=>{
  console.log("change b func")
}
b.func()