// 在非严格模式下 未经过声明符var let const 声明的变量会自动挂载到全局对象上  无论这个变量在函数中嵌套的多深 且此变量可被delete删除
function a() {
    function b() {
        function c() {
            temp = 666
            return temp
        }
        return c()
    }
    return b()
}
a()
console.log(globalThis.temp,delete temp)
