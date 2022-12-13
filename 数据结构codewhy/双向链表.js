// 双向链表  应用广泛
// 既可以通透遍历到尾部 也可以从尾部遍历到头部
// 一个节点既有向前链接的引用，也有一个向后链接的引用
// 相对单向链表 较耗用内存

// 封装结点
class  Node{
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

// 封装链表类
class DoublyLinkedList {
    head = null // 头结点
    tail = null // 尾结点
    length = 0 // 节点个数
    // 1.append
    append(data){
        let newNode = new Node(data)
        if(this.length === 0){
            this.head = newNode
        }else{
            let curNode = this.head
            while (curNode.next){
                curNode = curNode.next
            }
            curNode.next = newNode
            newNode.prev = curNode
        }
        this.tail = newNode
        this.length += 1
    }
    #isOutRange(position){
        return (position < 0 || position > this.length)
    }
    insert(position,ele){
        let curNode = this.head
        if(!this.#isOutRange(position)){
            let newNode = new Node(ele)
            let i = 0
            let prev = null
            if( this.length === 0){
                this.head = newNode
                this.tail = newNode
            }else{
                if(position === 0){  //首节点
                    this.head.prev = newNode
                    newNode.next = this.head
                    this.head = newNode
                }else if( position === this.length){
                    newNode.prev = this.tail //新节点的prev指向最后一个节点
                    this.tail.next = newNode // 最后一个节点的next指向newNode
                    this.tail = newNode // tail指向newNode
                }else {
                    while (position !== i){
                        prev = curNode
                        curNode = curNode.next
                        i++
                    }
                    prev.next = newNode
                    newNode.prev = prev
                    newNode.next = curNode
                    curNode.prev = newNode
                }
                this.length += 1
                return true

            }
        }else{
            return false
        }
    }
    toString(){
        return this.backwardString()
    }
    forwardString(){ // 从后往前遍历
        let curNode = this.tail
        let resultString = ""
        while(curNode){
            resultString = resultString + curNode.data +" "
            curNode = curNode.prev
        }
        return resultString
    }
    backwardString(){ // 从前往后遍历
        let curNode = this.head
        let resultString = ""
        while(curNode){
            resultString = resultString + curNode.data +" "
            curNode = curNode.next
        }
        return resultString
    }
    #_getNode(position){
        if((!this.#isOutRange(position)) && position < this.length){
            // TODO 优化方案
            // this.length / 2 > position 从前往后遍历
            // this.length / 2 < position 从后往前遍历
            let i = 0
            let curNode = this.head
            while (position !== i) {
                curNode = curNode.next
                i++
            }
            return curNode
        }else {
            return null
        }
    }
    get(position){
        return this.#_getNode(position).data || false
    }
    indexOf(ele){
        let curNode = this.head
        let i = 0
        while (ele !== curNode.data){
            curNode = curNode.next
            i += 1
            if(i >= this.length)return -1
        }
        return i
    }
    update(position,ele){
        let node = this.#_getNode(position)
        if(node){
            node.data = ele
            return true
        }else {
            return false
        }
    }
    removeAt(position){
        // 思路  按首节点 尾节点 中间节点来区分
        let node = this.#_getNode(position)
        if(!node)return null
        if(this.length === 1) {
            this.head = null
            this.tail = null
        }else{
            if(position === 0){  // 首节点
                this.head.next.prev = null
                this.head = this.head.next
            }
            else if(position === this.length - 1){ // 尾结点
                this.tail.prev.next = null
                this.tail = this.tail.prev
            }else {
                node.prev.next  = node.next
                node.next.prev = node.prev
            }
            this.length -= 1
            return node?.data
        }
    }
    remove(ele){
        return this.removeAt(this.indexOf(ele))
    }
    isEmpty(){
        return this.length === 0
    }
    size(){
        return this.length
    }
    headNode(){
        return this.head.data
    }
    tailNode(){
        return this.tail.data
    }}


let Dl = new DoublyLinkedList()
Dl.append('1')
Dl.append("2")
Dl.append("5")
Dl.append("3")
console.log(Dl.forwardString(),Dl.backwardString())
Dl.insert(4,'000')
console.log(Dl.backwardString())
// console.log(Dl.get(1))
console.log(Dl.indexOf('2'))
console.log(Dl.update(0,'111')
)
console.log(Dl.toString())
Dl.removeAt(1000)
console.log(Dl.toString())
Dl.remove('2')
console.log(Dl.toString())
console.log(Dl.size(),Dl.isEmpty(),Dl.headNode(),Dl.tailNode())

