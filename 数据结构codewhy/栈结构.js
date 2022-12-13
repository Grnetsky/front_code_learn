// 基于数组实现栈结构
function Stack() {
    this.items = [] // 基于数组
    // 栈的相关操作
    // //1.将元素压入栈
    Stack.prototype.push = (ele)=>{
        return this.items.push(ele)
    }
    // //2. 弹出栈
    Stack.prototype.pop = (ele)=>{
        return this.items.pop()
    }
    // //3.查看栈顶元素
    Stack.prototype.peek = ()=>{
        return this.items[this.items.length-1]
    }
    // //4.是否为空
    Stack.prototype.isEmpty = ()=>{
        return this.items.length === 0
    }
    // //5.栈大小
    Stack.prototype.size = ()=>{
        return this.items.length
    }
    // //6.toString方法
    Stack.prototype.toString = ()=>{
        return this.items.join(' ')
    }

    // this.pop = ()=>{}
    // this.peek = ()=>{}
    // this.isEmpty = ()=>{}
    // this.size = ()=>{}
    // this.pop = ()=>{}
}
let s = new Stack()
s.push(1)
s.push(2)
s.push(3)
console.log(s.peek())
s.pop()
console.log(s.isEmpty(),s.size(),s.peek())

//栈的应用
//1.十进制转为二进制  算法 / 2
function dec2bin(decNumber) {
    let s = new Stack()
    while (decNumber > 0 ){
        s.push(decNumber % 2)
        decNumber = Math.floor(decNumber / 2)
    }
    var bS =''
    while (s.size()>0){
        bS+=s.pop()
    }
    return bS
}
console.log(dec2bin(1000))
