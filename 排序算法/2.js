function ArrayList() {
    //属性
    this.array = []

    //方法
    //封装将数据插入到数组中方法
    ArrayList.prototype.insert = function (item) {
        this.array.push(item)
    }

    //toString方法
    ArrayList.prototype.toString = function () {
        return this.array.join('-')
    }

    //交换两个位置的数据
    ArrayList.prototype.swap = function (m, n) {
        let temp = this.array[m]
        this.array[m] = this.array[n]
        this.array[n] = temp
    }
    //冒泡排序
    ArrayList.prototype.bubbleSort = function(){
        //1.获取数组的长度
        let length = this.array.length

        //外层循环控制冒泡趟数
        for(let j = length - 1; j >= 0; j--){
            //内层循环控制每趟比较的次数
            for(let i = 0; i < j; i++){
                if (this.array[i] > this.array[i+1]) {
                    //交换两个数据
                    let temp  = this.array[i]
                    this.array[i] = this.array[i+1]
                    this.array[i+1] = temp
                }
            }
        }
    }
    //选择排序
    ArrayList.prototype.selectionSort = function(){
        //1.获取数组的长度
        let length = this.array.length

        //2.外层循环：从0开始获取元素
        for(let j = 0; j < length - 1; j++){
            let min = j
            //内层循环：从i+1位置开始，和后面的元素进行比较
            for(let i = min + 1; i < length; i++){
                if (this.array[min] > this.array[i]) {
                    min = i
                }
            }
            this.swap(min, j)
        }
    }
    //插入排序
    ArrayList.prototype.insertionSort = function(){
        //1.获取数组的长度
        let length = this.array.length

        //2.外层循环:从第二个数据开始，向左边的已经局部有序数据进行插入
        for(let i = 1; i < length; i++){
            //3.内层循环：获取i位置的元素，使用while循环(重点)与左边的局部有序数据依次进行比较
            let temp = this.array[i]
            let j = i
            while(this.array[j - 1] > temp && j > 0){
                this.array[j] = this.array[j - 1]//大的数据右移
                j--
            }
            //4.while循环结束后，index = j左边的数据变为局部有序且array[j]最大。此时将array[j]重置为排序前的数据array[i]，方便下一次for循环
            this.array[j] = temp
        }
    }
    //希尔排序
    ArrayList.prototype.shellSort = function(){
        //1.获取数组的长度
        let length = this.array.length

        //2.初始化增量
        let gap = Math.floor(length / 2)

        //3.第一层循环：while循环(使gap不断减小)
        while(gap >= 1 ){
            //4.第二层循环：以gap为增量，进行分组，对分组进行插入排序
            //重点为：将index = gap作为选中的第一个数据
            for(let i = gap; i < length; i++){
                let temp = this.array[i]
                let j = i
                //5.第三层循环:寻找正确的插入位置
                while(this.array[j - gap] > temp && j > gap - 1){
                    this.array[j] = this.array[j - gap]
                    j -= gap
                }
                //6.将j位置的元素设置为temp
                this.array[j] = temp
            }
            gap = Math.floor(gap / 2)
        }
    }
}
let a = new ArrayList()

for (let i = 0;i < 50000; i++){
    a.insert(Math.floor(Math.random()*(1000000-1)+1)) //生成随机整数
}

// 计算时间函数
function getTime(str,func) {
    let start = new Date().getTime()
    func()
    let end = new Date().getTime()
    let elapsed = end - start
    console.log(`${str}排序耗时：`,elapsed)
}

// getTime("冒泡",a.bubbleSort.bind(a))     // 50000个数据 6708ms  4805ms
// console.log("冒泡排序："+a.toString()) // 冒泡排序结果

// getTime("选择",a.selectionSort.bind(a))   // 50000个数据  1257ms  //TODO 惊人的快？？？  1167ms
// console.log("选择排序："+ a.toString()) // 选择排序结果

// getTime("插入",a.insertionSort.bind(a))  // 50000个数据  8255ms   // TODO 为什么这里插入排序比其他慢？
// console.log("插入排序："+a.toString()) // 插入排序结果

getTime("希尔",a.shellSort.bind(a))  //50000个数据 58ms  // TODO 真的快 58ms
console.log(a.toString())

