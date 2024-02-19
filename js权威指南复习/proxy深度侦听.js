const deepProxy = (target, onChange) => {
    const handler = {
        get(target, key, receiver) {
            try {
                return new Proxy(target[key], handler);
            } catch (err) {
                return Reflect.get(target, key, receiver);
            }
        },
        set(target, key, value, receiver) {
            const result = Reflect.set(target, key, value, receiver);
            onChange(key, value);
            return result;
        }
    };
    return new Proxy(target, handler);
};

const obj = {
    nested: {
        prop: 'initial value'
    }
};

const onChange = (key, value) => {
    console.log(`Property ${key} set to ${value}`);
};

const proxiedObj = deepProxy(obj, onChange);
proxiedObj.nested.prop = 'new value'; // 输出：Property prop set to new value
