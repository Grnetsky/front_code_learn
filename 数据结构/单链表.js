// 通过节点的next域指向下一个节点实例  从而形成链式查询    查询时需要遍历每个数据

function singleList(size){
    // 初始化头结点
    this.headnode = new node('头结点')

    this.size = size
    this.temp = this.headnode
}

// 不考虑节点顺序时 不考虑节点顺序时
// 1.先找到当前链表的最后节点
singleList.prototype.addNode = function (node) {
    this.temp = this.lastNode()
    this.temp.next = node
}
singleList.prototype.lastNode = function (){
    //归位指针到头指针
    this.temp = this.headnode
    while(true) {
        if (this.temp.next == null) {
            return this.temp
        } else {
            this.temp = this.temp.next
        }

    }
}

singleList.prototype.printList = function () {
    //归位指针到头指针
    this.temp = this.headnode
    while(true) {
        if (this.temp.next == null) {
            break
        } else {
            this.temp = this.temp.next
            console.log(this.temp.data)
        }
    }
}
/*
* :params
* */
function node(data){
    this.data = data
    this.next = null
}


let sing = new singleList()
sing.addNode(new node({no:1,msg:"第一个"}))
sing.addNode(new node({no:2,msg:"第二个"}))
// sing.addNode(new node("3"))
// sing.addNode(new node("4"))
/*
*
* 第1个
第3个
第4个
第2个
*/


// 若考虑排序问题
// 思路 1.首先找到新添加到节点位置
// 2.新的节点的next 指向 该位置前next所指向的节点
// 3.改为之前的节点的next指向该新增的节点

singleList.prototype.addByOrder = function (node) {
    this.temp = this.headnode
    let canAdd = true
    while (true){
        if(this.temp.next == null){  // 若后面无节点  则表示用插入到最后位置
            this.temp.next = node
              break
        }
        if(this.temp.next.data.no > node.data.no ){  // 插入条件
            node.next = this.temp.next
            this.temp.next = node
            break
        }else if (this.temp.next.data.no == node.data.no){  // 节点是否存在
            canAdd = false
            break
        }
        this.temp = this.temp.next
    }
    if(!canAdd){
        console.log("该节点已存在")
    }

}
sing.addByOrder(new node({no:5,msg:"第三个"}))

singleList.prototype.update = function (newnode) {
    this.temp = this.headnode
    // console.log(newnode,"##")
    // sing.printList()
    while(true){
         if(this.temp == null){
             break
         }
         if(this.temp.data.no == newnode.data.no){
             // console.log

             this.temp.data.msg = newnode.data.msg
             // sing.printList()

             break
         }
         this.temp = this.temp.next
    }
}
// 单链表的修改
// sing.addByOrder(new node({no:5,msg:"更改后的第二个"}))
// sing.printList()
sing.update(new node({no:2,msg:"更改后的第二个"}))
sing.update(new node({no:5,msg:"更改后的第五个"}))
sing.printList()

singleList.prototype.getLength = function () {
    this.temp = this.headnode
    let i = 0
    while (true){
        // console.log(i,"-----1231321231----")
        if(this.temp == null )break
        this.temp = this.temp.next
        i++
    }
    return i
}
// 删除节点
/*
* 让指向被删除节点的next指向被删除节点的next所指向的实例即可
* */
singleList.prototype.del = function (no) {
    let i = 0
    if(no<=0 || no>this.getLength())
    {
        return null
    }
    this.temp = this.headnode
    while(true){
        if (this.temp == null){
            break
        }
        if(i == no-1){
            this.temp.next = this.temp.next.next
            break
        }
        this.temp = this.temp.next
        i++
    }
}
sing.del(1)
sing.printList()

console.log(sing.getLength())
console.log("删除")
sing.printList()


// 腾讯面试题  单链表的反转

singleList.prototype.reverse = function (){

    // 若当前连边为空或者为一个节点 则返回元
    if(this.headnode.next == null || this.headnode.next.next == null){
        return
    }
    this.temp = this.headnode
    let  newHead = new Node("新的头结点")
    while(true){
        if(this.temp.next == null){
            newHead.next = this.temp
        }
        this.temp = this.temp.next


    }

}
