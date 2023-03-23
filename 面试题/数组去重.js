// 1. set + 扩展运算符

let arr = [1,2,3,4,1,2,6]
let result = [...new Set(arr)]
console.log(result)

// 2. 循环遍历
let arr = [1,2,3,4,1,2,6]
let result = []
arr.forEach((item)=>{
    if (!result.includes(item))result.push(item)
})
console.log(result)

// 3. 相邻去除
let arr = [1,2,3,4,1,2,6,6]
arr.
arr.sort() // 排序
for (let i = 0;i<arr.length-1;i++){
    if(arr[i] === arr[i+1])arr.splice(i,1)
}
console.log(arr)

// 4. 其他类似数组查询元素的api indexOf，findIndex，find
