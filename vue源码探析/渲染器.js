function render(vnode,container) {
    console.log(vnode,container)
    if(typeof vnode.tag === 'string'){
        mountElement(vnode,container)
    }else if(typeof vnode.tag === 'function'){   // 渲染函数组件
        mountFuncComponent(vnode,container)
    }else if(typeof vnode.tag === 'object'){     // 渲染对象组件
        mountObjComponent(vnode,container)
    }
}

function mountFuncComponent(vnode,container) {  //组件渲染函数  所谓组件本质就是返回虚拟dom的一个方法
    const subtree = vnode.tag() // 返回虚拟dom
    render(subtree,container  )  // 渲染虚拟dom
}
function mountObjComponent(vnode,container) {
    const subtree = vnode.tag.render()
    render(subtree,container)
}

function mountElement(vnode,container){
    const el = document.createElement(vnode.tag)   // 创建元素
    for(let key in vnode.props){
        if(/^on/.test(key)){
            el.addEventListener(key.slice(2).toLowerCase(),vnode.props[key]) // 绑定事件
        }else {
            el[key] = vnode.props[key]  // 绑定其他属性
            console.log(vnode.props[key])
        }

    }
    if(typeof vnode.children == 'string'){   //children位string 则为文本节点
        el.appendChild(document.createTextNode(vnode.children))
    }else if (Array.isArray(vnode.children)){  //若为数组则 递归创建元素
        vnode.children.forEach((item,index)=>render(item,el))

    }
    container.appendChild(el)  // 将创建的元素挂载到挂在点下
}
let vnode = {  //虚拟dom
    tag:"div", // 标签名
    props:{   // 属性
        onClick: ()=>{
            console.log("onClick")
        },
        className:"div"
    },
    children:[{
        tag:"span",
        props:{
            className: "span"
        },
        children: "span"
    }]
}

let funcComponent = function () {   // 函数组件
    return {
        tag:"div", // 标签名
        props:{   // 属性
            onClick: ()=>{
                console.log("onClick")
            },
            className:"div"
        },
        children:[{
            tag:"span",
            props:{
                className: "span"
            },
            children: "span"
        }]
    }
}


let objComponent = {   // 对象组件
    render(){   // 在vue的文件中 是通过编译器将 <template>标签里的内容转换为render函数返回虚拟dom  最后通过render渲染器将虚拟dom转换为真实dim
        return {
            tag:"div", // 标签名
            props:{   // 属性
                onClick: ()=>{
                    console.log("onClick")
                },
                className:"div"
            },
            children:[{
                tag:"span",
                props:{
                    className: "span"
                },
                children: "span"
            }]
        }
        // 还会存在其他字段用来描述虚拟dom
    }
}
// render(vnode,document.body)

class obj {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    say(){

    }
}
class obj2 extends obj {
    constructor(name,age,sex) {
        super(name,age);
        this.sex = sex
    }
    say2(){
    }
}
let o1 = new obj2(1,2,1)
console.log(o1)
let o = {a:1}
let b = {...o1}
console.log(b)

let list = [1,2,3,4]
let obj3 = {a:"a"}

list.forEach(function (item){
    console.log(item,this)}, {a:"a"})

globalThis.a = "global"
list.forEach((item)=>{
    console.log(item,this)},globalThis)

