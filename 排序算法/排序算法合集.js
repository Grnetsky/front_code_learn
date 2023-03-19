class ArrayList{
    array = []
    insert(item){
        this.array.push(item)
    }
    toString(){
        return this.array.join(',')
    }
    // 冒泡排序 从左到右依次两两比较 将较大数字放到右边 比较效率0n2 交换效率On2
    bubbleSort(){
        let n = 0
        for (let j = this.array.length-1;j>=0;j--){
            for(let i = 0;i < j; i++){
                this.array[i] > this.array[i+1]?[this.array[i+1],this.array[i]] = [this.array[i],this.array[i+1]]:{} // 前面大于后面则交换位置 较大的放后面}
                n +=1 // 计数
            }
        }
        console.log(n)
    }

    // 选择排序 从左往右遍历选择最小的依次排序 比较效率On2 交换效率On
    selectionSort() {
        let max = 0 // 最大值下标
        for (let j = this.array.length - 1; j >= 0; j--){
            for (let i = 0; i <= j; i++) {
                (this.array[i] > this.array[max])? max = i: {}
            }
            [this.array[j],this.array[max]] = [this.array[max],this.array[j]]
            max = 0
        }
    }

    // 插入排序: 是学习高级排序的基础
    insertionSort(){
        for(let i = 0;i<this.array.length;i++){
            let temp = this.array[i] // 当前插入对象
            let j = i
            while(this.array[j-1]>temp && j>0){
                this.array[j-1] = this.array[j]
                j--
            }
            this.array[j] = temp
        }
    }
    // 希尔排序
    // 快速排序
}

let a = new ArrayList()

for (let i = 0;i < 10; i++){
    a.insert(Math.floor(Math.random()*(100-1)+1))
}
console.log("初始值"+a.toString())
a.bubbleSort()
console.log("冒泡排序："+a.toString()) // 冒泡排序结果
a.selectionSort()
console.log("选择排序："+ a.toString()) // 选择排序结果
a.insertionSort()
console.log("插入排序："+a.toString())
