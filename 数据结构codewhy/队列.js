// 基于数组的队列(性能不高)
export class Queue{
    //属性
    item = []
    //方法
    enQueue(ele){
        this.item.push(ele)
    }
    deQueue(){
        return this.item.shift() //删除后元素会自动往前移 性能不高
    }
    front(){
        return this.item[0]
    }
    isEmpty(){
        return this.item.length === 0
    }
    size(){
        return this.item.length
    }
    toString(){
        return this.item.join(' ')
    }
}
let queue = new Queue()
queue.enQueue('a')
queue.enQueue('b')
queue.enQueue('c')
console.log(queue)
queue.deQueue()
console.log(queue,queue.size(),queue.front(),queue.toString())
//队列面试题  击鼓传花
//规则 ：几个朋友围城一圈依次数数，数到某个数字的人自动淘汰，最终者获胜
function passGame(nameList,number) {
    let queue = new Queue()
    //1.所有人进队列
    nameList.forEach((item)=>{
        queue.enQueue(item)
    })
    //2.
    while (queue.size()>1){
        for(let i=0;i<number-1;i++){
            queue.enQueue(queue.deQueue())
        }
        queue.deQueue()
    }
    return queue.front()
}
console.log(passGame([1,2,3],3))

