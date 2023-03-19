const PENDING = 'pending';
const FULFILLED = 'fulfilled';  //兑现
const REJECTED = 'rejected'; // 拒绝

function MyPromise(executor) {
    this.state = PENDING  // 定义状态
    this.value = null; // 值
    this.reason = null; // 原因
    this.onFulfilledCallbacks = [];  // 兑现执行队列
    this.onRejectedCallbacks = [] // 拒绝后`执行队列
    // 定义了resolve处理函数
    const resolve = (value) => {
        if (this.state === PENDING)  { // 判断状态是否是待定
            this.state = FULFILLED;  // 状态兑现
            this.value = value; // 兑现值等于传入值
            this.onFulfilledCallbacks.forEach((fun) => {  // 依次执行兑现队列函数
                fun();
            });
        }
    };

    const reject = (reason) => {
        if (this.state === PENDING) {
            this.state = REJECTED;  //状态设置为拒绝
            this.reason = reason; // 定义拒绝原因
            this.onRejectedCallbacks.forEach((fun) => {  // 执行拒绝队列函数
                fun();
            });
        }
    };

    try {
        executor(resolve, reject);  // 执行函数 传入 resolve和reject
    } catch (reason) {
        reject(reason);
    }
}

//原型上面的方法
//用settimeout来模拟异步调用,保证链式调用，即then方法中要返回一个新的promise，并将then方法的返回值进行resolve
MyPromise.prototype.then = function (onFulfilled, onRejected) {  //定义then方法区
    if (typeof onFulfilled != 'function') {
        onFulfilled = function (value) {
            return value;
        };
    }
    if (typeof onRejected != 'function') {
        onRejected = function (reason) {
            throw reason;
        };
    }
    const promise2 = new MyPromise((resolve, reject) => {
        switch (this.state) {
            case FULFILLED:
                setTimeout(() => {
                    try {
                        const x = onFulfilled(this.value);
                        resolve(x);
                    } catch (reason) {
                        reject(reason);
                    }
                }, 0);
                break;
            case REJECTED:
                setTimeout(() => {
                    try {
                        const x = onRejected(this.reason);
                        resolve(x);
                    } catch (reason) {
                        reject(reason);
                    }
                }, 0);
                break;
            case PENDING:
                this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const x = onFulfilled(this.value);
                            resolve(x);
                        } catch (reason) {
                            reject(reason);
                        }
                    }, 0);
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const x = onRejected(this.reason);
                            resolve(x);
                        } catch (reason) {
                            reject(reason);
                        }
                    }, 0);
                });
                break;
        }
    });
    return promise2;
};

// 所谓catch就是then的语法糖
MyPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
};

MyPromise.prototype.finally = function (fn) {
    return this.then(
        (value) => {
            fn();
            return value;
        },
        (reason) => {
            fn();
            throw reason;
        }
    );
};

//静态方法
MyPromise.resolve = function (value) {
    return new MyPromise((resolve, reject) => {
        resolve(value);
    });
};

MyPromise.reject = function (reason) {
    return new MyPromise((resolve, reject) => {
        reject(reason);
    });
};

//接受一个promise数组，当所有promise状态resolve后，执行resolve
MyPromise.all = function (promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            resolve([]);
        } else {
            let result = [];
            let index = 0;
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(
                    (data) => {
                        result[i] = data;
                        if (++index === promises.length) {
                            resolve(result);
                        }
                    },
                    (err) => {
                        reject(err);
                        return;
                    }
                );
            }
        }
    });
};

//接受一个promise数组，当有一个promise状态resolve后，执行resolve
MyPromise.race = function (promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            resolve();
        } else {
            let index = 0;
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(
                    (data) => {
                        resolve(data);
                    },
                    (err) => {
                        reject(err);
                        return;
                    }
                );
            }
        }
    });
};

MyPromise.prototype.any = function (promises) {

}


let a = function () {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(2)},2000)
    })
}

a().then((value)=>{console.log(value);return value}).then((value)=>{console.log(value);return value}).then((value)=>{console.log(value);return value}).then((value)=>{console.log(value);return value})
