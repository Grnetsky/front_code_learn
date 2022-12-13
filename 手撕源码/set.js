function updateView() {
    /**
     * 模拟更新试图的操作
     */
    console.log('更新视图');
}

function observer(target) {
    /**
     * 观察目标对象
     */
    if (typeof target !== 'object' || target === null) {
        return target;
    }

    for (let key in target) {
        defineReactive(target, key, target[key]);  // 传递指针
    }
}

function defineReactive(obj, key, value) {
    /**
     * 将目标对象变成响应式
     */
    Object.defineProperty(obj, key, {
        get() {
            return value;
        },
        set(newValue) {
            if (newValue !== value) {
                value = newValue;
                updateView();
            }
        }
    });
}



const data = {
    name: 'zm'
};

observer(data);
data.name = 'jerry121233'; // 更新视图
console.log(data.name); // jerry
let a = {
    b:123
}
