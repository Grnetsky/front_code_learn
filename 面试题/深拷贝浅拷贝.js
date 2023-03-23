function clone(data) {
    return JSON.parse(JSON.stringify(data))// json.stringify会自动识别是否循环引用
}
let a = {b:1}
a.a = a
clone(a)
