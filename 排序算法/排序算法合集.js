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
    insertionSort() {
        let length = this.array.length
        for(let i = 1;i<length;i++){
            var temp = this.array[i] //当前要插入的元素
            var j = i-1 // 匹配的元素下标
            while( (this.array[j] > temp) && j >= 0 ){ // TODO 比较操作比较费时  应该先看是否为0在进行比较 条件交换竟然有10倍多的差距
                this.array[j+1] = this.array[j]
                j--
            }
            this.array[j+1]  = temp
        }

        // let length = this.array.length
//别人写的  对比
//         let arr = this.array
//         const len = arr.length
//
//         // 注意，i 从 1 开始
//         for(let i = 1; i < len; i++){
//             let preIndex = i - 1;
//             let current = arr[i];
//
//             // 位置i之前，是已排好序的数字，while的作用是找到一个坑位，给当前数字current插入
//             while(preIndex >= 0 && arr[preIndex] > current){
//                 arr[preIndex+1] = arr[preIndex]; // 对大于current的值，往后移一位，给current的插入腾出位置
//                 preIndex--;
//             }
//             arr[preIndex+1] = current;
//         }

//         return arr

    }
    // 希尔排序（在插入排序基础上改进）  此处增量选择原稿增量 N/2
    shellSort(){
        let length = this.array.length
        // 初始化增量
        let gap = Math.floor(length / 2)
        while (gap>=1){
            // 以gap作为间隔进行分组
            for(let i = gap;i<length; i++){
                let temp = this.array[i] // 当前插入的元素
                let j = i
                while (this.array[j-gap]>temp && j>0 &&j > gap - 1){
                    this.array[j] = this.array[j-gap]
                    j-=gap
                }
                this.array[j] = temp
            }
            gap = Math.floor(gap /= 2)
        }
    }
    // 快速排序: 20s世纪十大算法之一  冒泡排序的升级版
    //1. 选择枢纽
    middle(left,right){
        let center = Math.floor((left + right)/2 )
        //对首尾中三个数据进行排序
    }

    quickSort(){
        let result = this.quick(this.array)
        this.array = result
    }
    quick(list){
        if(list.length === 0)return []
        let lesser = []
        let greater = []
        let pivot = list[0]  //基准值
        for(let i = 1;i<list.length;i++){
            if(list[i]> pivot)greater.push(list[i])
            if(list[i]< pivot)lesser.push(list[i])
        }
        return this.quick(lesser).concat(pivot,this.quick(greater))
    }
}

let a = new ArrayList()

// 数据初始化
for (let i = 0;i < 5; i++){
    a.insert(Math.floor(Math.random()*(1000000-1)+1)) //生成随机整数
}

// 计算时间函数
function getTime(str,func) {
    return ()=>{
        let start = new Date().getTime()
        func()
        let end = new Date().getTime()
        let elapsed = end - start
        console.log(`${str}排序耗时：`,elapsed)
        return elapsed
    }
}

// getTime("冒泡",a.bubbleSort.bind(a))     // 50000个数据 6708ms
// console.log("冒泡排序："+a.toString()) // 冒泡排序结果

// getTime("选择",a.selectionSort.bind(a))   // 50000个数据  1257ms  //TODO 惊人的快？？？
// console.log("选择排序："+ a.toString()) // 选择排序结果

getTime("插入",a.insertionSort.bind(a))()  // 50000个数据  8255ms   // TODO 为什么这里插入排序比其他慢？ 可能写错了 要检查
console.log("插入排序："+a.toString()) // 插入排序结果

// getTime("希尔",a.shellSort.bind(a))()  // 697ms
// console.log(a.toString())
// getTime("快速",a.quickSort.bind(a))()  //50000个数据 65ms  // TODO 目前地表最快算法之一
// console.log(a.toString())

function calculateTime(str,func,n){
    let allTime = 0
    for(let i = 0;i<n;i++){
        a.array = []
        for (let i = 0;i < 50000; i++){
            a.insert(Math.floor(Math.random()*(1000000-1)+1)) //生成随机整数
        }
        allTime+=func()
    }
    console.log(str+"avr："+allTime/n+'ms')
}
// calculateTime("冒泡",getTime("冒泡",a.bubbleSort.bind(a))   ,10)
// calculateTime("选择",getTime("选择",a.selectionSort.bind(a)) ,10)
// calculateTime("插入",getTime("插入",a.insertionSort.bind(a)),10)
// calculateTime("希尔",getTime("希尔",a.shellSort.bind(a)),10)
//calculateTime("快速",getTime("快速",a.quickSort.bind(a)),10)

// console.log(a.toString())
