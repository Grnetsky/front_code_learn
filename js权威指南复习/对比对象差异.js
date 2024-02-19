function isObject(object) {
    return object != null && typeof object === 'object';
}

function compareObjects(object1, object2) {
    const diffs = {};
    const compare = function(item1, item2, key) {
        const type1 = Object.prototype.toString.call(item1);
        const type2 = Object.prototype.toString.call(item2);
        if (type1 !== type2) {
            diffs[key] = { oldVal: item1, newVal: item2 };
            return;
        }

        if (isObject(item1) && isObject(item2)) {
            const objDiffs = compareObjects(item1, item2);
            if (Object.keys(objDiffs).length > 0) {
                diffs[key] = objDiffs;
            }
        } else if (item1 !== item2) {
            diffs[key] = { oldVal: item1, newVal: item2 };
        }
    };

    for (const key in object1) {
        if (object1.hasOwnProperty(key)) {
            compare(object1[key], object2[key], key);
        }
    }

    for (const key in object2) {
        if (object2.hasOwnProperty(key)) {
            if (!object1.hasOwnProperty(key)) {
                diffs[key] = { oldVal: undefined, newVal: object2[key] };
            }
        }
    }

    return diffs;
}

// 示例
const obj1 = { name: 'Alice', age: 25, traits: { hair: 'brown', eyes: 'blue' } };
const obj2 = { name: 'Alice', age: 30, traits: { hair: 'blonde' } };

const differences = compareObjects(obj1, obj2);
console.log(differences);
