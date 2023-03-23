let arr = [ ,1,2,3,4,1,123,13] // 稀疏数组

// for 是实时的 length回不断变长
for(let i = 0 ;i<arr.length;i++){
    arr.push(i)
}

// for of 不会跳过稀疏元素，实时的，用来遍历可迭代数据
for(let i of arr){
    arr.push(i)
}

// 会跳过稀疏元素，非实时的
arr.forEach((item)=>{
    console.log(item)
    arr.push(item)
})
