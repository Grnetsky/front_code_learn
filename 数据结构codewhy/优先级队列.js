// 优先级队列（数组实现）  优先级决定元素位置
class PriorityQueue {
    items = [] // 队列
    enqueue(item,priority){
        // 1.定义元素结构体
        let struct =  {item,priority}
        //2.插入元素
        if(this.items.length === 0){
            this.items.push(struct)
        }else{
            // 获取队列长度
            let i = this.items.length-1
            let first = false
            while (this.items[i].priority > struct.priority){
                if(i===0){
                    first = true
                    break
                }else{
                    i--
                }
            }
            first?this.items.unshift(struct) : this.items.splice(i+1,0,struct)
        }
    }
    dequeue(){
    }
}

let pQ = new PriorityQueue()
pQ.enqueue("1",100)
pQ.enqueue('3',10)
pQ.enqueue('4',88)
pQ.enqueue('5',88)
pQ.enqueue('6',99)
pQ.enqueue('6',200)
pQ.enqueue('6',300)
pQ.enqueue('6',0)
pQ.enqueue('6',150)
pQ.enqueue('6',0)
console.log(pQ)
