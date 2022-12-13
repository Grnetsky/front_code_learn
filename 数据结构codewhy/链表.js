// 单项链表

// 节点类
class Node{
    constructor(data) {
        this.data = data
        this.next = null
    }

}
// 链表类
class LinkedList {
    head = null
    length = 0
    append(ele){
        let newNode = new Node(ele)
        if(this.length === 0){
            this.head = newNode
        }else{
            let curNode = this.head
            while (curNode.next){
                curNode = curNode.next
            }
            curNode.next = newNode
        }
        this.length ++
    }
    toString(){
        let curNode = this.head
        let str = ''
        while (curNode){
            str+=curNode.data+' '
            curNode = curNode.next
        }
        return str
    }
    insert(position, ele){
        if(position<0 || position > this.length+1)return false
        let curNode = this.head
        let newNode = new Node(ele)
        // 情况一 插入到position=0的位置
        if(position === 0){
            this.head = newNode
            newNode.next = curNode
            return false
        }else{
            for(let i=1;i<position;i++){
                curNode = curNode.next
            }
            newNode.next  = curNode.next
            curNode.next = newNode
            this.length++
            return true
        }
    }
    get(position){
        if(position < 0 || position > this.length)return null
        let index = 0
        let curNode = this.head
        while (position !== index){
            index++
            curNode  = curNode.next
        }
        return curNode.data
    }
    indexOf(ele){
        let curNode = this.head
        let index = 0
         while (curNode){
             if(ele === curNode.data)return index
             curNode = curNode.next
             index++
         }
         return -1
    }
    update(position,ele){
        if(position < 0 || position >= this.length)return false
        let index = 0
        let curNode = this.head
        while (position !== index){
            index++
            curNode  = curNode.next
        }
        curNode.data = ele
        return true
    }
    removeAt(position){
        if(position < 0 || position > this.length)return false
        let curNode = this.head
        let previous = null
        let index = 0
        if(position === 0){
            this.head = curNode.next
        }else{
            while (index++ < position){
                previous = curNode
                curNode = curNode.next
            }
            previous.next = curNode.next
        }
        this.length --
        return curNode.data
    }
    remove(ele){
        return this.removeAt(this.indexOf(ele))
    }
    size(){
        return this.length
    }
    isEmpty(){
        return this.length === 0
    }
}

let ld = new LinkedList()
ld.append("1")
ld.append("2")
ld.append("3")
ld.append("4")
ld.append("5")
ld.insert(2,'insert')
ld.insert(0,'000')
ld.insert(7,'9999')
console.log(ld)
console.log(ld.toString())
console.log(ld.get(1))
console.log(ld.indexOf('insert'))
ld.update(0,'888')
console.log(ld.removeAt(7))
console.log(ld.toString())
ld.remove('888')
console.log(ld.toString())
console.log(ld.isEmpty(),ld.size())
