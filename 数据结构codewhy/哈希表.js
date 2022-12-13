// 哈希表  hash map
// 什么是哈希表？ 他的结构就是数组  但他的神奇之处在于对下标值的一种变换  这种变换称之为哈希函数   通过哈希函数可以获取到hashcode

// 哈希表通常是基于数组实现的 但是相对于数组 他有很多的优势
// 1.提供非常快速的 插入-删除-查找 操作
// 2.无论多少个数据 插入删除值需要接近常量o(1)的时间级，实际上，只需要几个机器指令即可
// 3.哈希表的速度比树还快  基本可以瞬间找到想要的元素

// 缺点：哈希表数据是无序的  key是不允许重复

// 哈希化：将大数字转化为数组范围内下标的过程，
// 哈希函数：将单词转成大数字 大数字再进行哈希化的代码封装到一个函数中，这个函数称之为 哈希函数
// 哈希表：最终将数据插入到的这个数组，对整个结构的封装，称之为哈希表

// 当下标重复时（冲突） 如何解决？
//  1.链地址法（拉链法） 每个数组单元存储的不是元素 而是链表或者数组 一旦发现重复就 将元素插入到链表或者数组中  查找时先用hash指取出链表 在根据链表取出对应元素 (简单好用)
//  2.开放地址法 寻找空白单元格来添加重复的数据  探索空白位置的三种方法： 线性探测   二次探测  再哈希法
// 优秀的哈希函数要求：
// 1.快速的计算（尽量少用乘除法）   霍纳法则
// 2.均匀的分布  使用常量的地方 尽量使用质数
// 在开放地址法中  哈希表的长度最好使用质数

// 设计哈希函数  作用： 将字符串转成比较大的数字：hashcode   将大的数字压缩到数组范围之内
function hashFunc(str, size) {
    //1.定义hashcode变量
    let hashCode = 0
    // 2. 霍纳法则计算hashcode的值
    for(let i= 0;i<str.length;i++){
         hashCode = hashCode * 37 + str.charCodeAt(i) // 获取当前字符串的unicode
    }
    //3.取余操作
    return  hashCode % size
}

console.log(hashFunc('abc',37))
console.log(hashFunc('acd',37))
console.log(hashFunc('abx',37))
console.log(hashFunc('BBB',37))
console.log(hashFunc('899',37))
console.log(hashFunc('kk'))


// 是否为质数
function isPrime(number){

    let sqt = Math.floor( Math.sqrt(number))  //开方
    for (let i = 2; i <= sqt; i++){
        if(number % i === 0) return false
    }
    return true
}

// 封装 哈希表 链地址法
class HashMap {
    storage = []
    count = 0 // 元素个数
    limit = 7
    // 哈希方法生成索引值
    hashFunc(str, size) {
        //1.定义hashcode变量
        let hashCode = 0
        // 2. 霍纳法则计算hashcode的值
        for(let i= 0;i<str.length;i++){
            hashCode = hashCode * 37 + str.charCodeAt(i) // 获取当前字符串的unicode
        }
        //3.取余操作
        return  hashCode % size
    }
    //插入修改操作 key用于找到列表  value为真正信息
    put(key,value){
        // 1.根据key获取索引值   目的：根据数据插入到对应的位置
        let index = this.hashFunc(key,this.limit)
        // 2.根据索引取出bucket （如果桶不存在，创建桶并且防止在该索引的位置 ）
        let bucket = this.storage[index]
        if(bucket == null){
            bucket = []
            this.storage[index] = bucket
        }
        // 3.判断是新增还是修改原来的值
        for(let i = 0;i<bucket.length;i++){
            let tuple = bucket[i]
            if(tuple[0] === key){
                tuple[1] = value
                return
            }
        }
        // 5.进行添加操作
        bucket.push([key,value])
        this.count +=1

        //判断是否需要扩容
        this.count>this.limit * 0.75 ? this.resize(this.limit * 2): {}
    }

    // 获取操作：根据key获取value
    get(key){
        let index = this.hashFunc(key,this.limit)
        let bucket = this.storage[index]
        if(bucket == null )return null
        for(let i = 0 ;i<bucket.length;i++){
            let tuple = bucket[i]
            if(tuple[0] === key)return tuple[1]
        }
        return null
    }

    delete(key){
        let index = this.hashFunc(key)
        let bucket = this.storage[index]
        if(bucket == null)return null
        for(let i = 0;i<bucket.length;i++){
            let tuple = bucket[i]
            if( tuple[0] === key ){
                bucket.slice(i,1)
                this.count --

                //判断是否缩容
                (this.limit > 7 && this.count < this.limit * 0.25) ? this.resize(this.limit / 2) : {}

                return tuple[1]
            }
        }
        return null
    }

// 哈希表扩容 一般为前部分的两倍 最好为质数  一旦容量扩大  所有数据必须全部重新插入！！
// 什么时候扩容？ loadFactor> 0.75时 既 count/limit > 0.75
    resize(newLimit){
        // 旧的引用
        let oldStorage = this.storage
        // 重置所有属性
        this.storage = []
        this.count = 0
        this.limit = newLimit
        // 将oldStorage中的元素塞进新storage中
        for(let  i = 0;i<oldStorage.length;i++){
            let bucket = oldStorage[i]
            if(Array.isArray(bucket)){
                for(let j = 0;j<bucket.length;j++){
                    let tuple = bucket[j]
                    // 重新插入新的数组
                    this.put(tuple[0],tuple[1])
                }
            }

        }
    }

    // 判断某个数字是否为质数
    isPrime(number){
        return isPrime(number)
    }
    // 获取最近的质数
    getPrime(number){
        while (!this.isPrime(number)){
            number++
        }
        return number

    }}
let h = new HashMap()
console.log(h.isPrime(9))

