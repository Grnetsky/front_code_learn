// 沙盒 局部作用于 代码执行的地方
function scopedEval(scope, expr) {
    const scopeKeys = Object.keys(scope);
    const scopeValues = Object.values(scope);

    // 函数的参数名称与作用域的键相匹配，函数体是表达式
    const func = new Function('data'/*这是变量名列表*/, `return ${expr};`);

    // 将作用域的值作为参数传递
    try {
        return func(scope);
    } catch (e) {
        console.error('[ScopedEval] Error: ', e.message);
    }
}

function fn() {
    let data = {index:1}
    scopedEval(data,'data.index+=1')
    console.log(data)
}
fn()