
//1 使用数组模拟
class ArrayQueue {
    maxsize = 10 // 队列最大值
    front = 0 // 队列头指针
    rear = 0 // 队列尾部
    arr = [] // 队列
    constructor(maxsize,) {
        this.maxsize = maxsize
        this.arr = new Array(this.maxsize)
        this.front = -1 // 指向队列头部的前一个位置
        this.rear = -1 // 指向队列尾部
    }
    isFull(){
        return this.rear == this.maxsize-1;
    }
    isImpety(){
        return this.rear == this.front
    }
    addQueue(n){
        if(this.isFull()){
            console.log("队列已满")

        }
        this.rear++
        this.arr[this.rear] = n

    }
    getQueue(){
        if(this.isImpety()){
            throw new Error("队列为空，不能取数据")
        }
        this.front++
        return this.arr[this.front]
    }
    showQueue(){
        if(this.isImpety()){
            console.log("队列为空")
            return false
        }
        console.log(this.arr)

    }
    headQueue(){
        if(this.isImpety()){
            throw new Error("队列为空")
        }
        return arr[this.front+1]
    }

}
