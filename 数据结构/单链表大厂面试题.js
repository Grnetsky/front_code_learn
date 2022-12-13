let  a = function (data) {
    this.data = data
    this.next = null
}
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
singleList.prototype.getLength = function () {

}
// 1、求单链表中有效节点的个数（遍历即可）


// 2. 反转单链表
// 思路 1.定义一个节点  命名为reverseHead
// 2.从头到尾遍历原来的链表，没遍历一个链表就


