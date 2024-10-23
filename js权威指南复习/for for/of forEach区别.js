const arr = [1, 2, 3];

// 死循环
// for (const i of arr) {
//     console.log(arr[i]);
//     arr.push(arr[i] + 1);
// }
// console.log(arr);


// 死循环
// for 循环
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     arr.push(arr[i] + 1);
// }
// console.log(arr);


// 无死循环
arr.forEach(i=>{
    arr.push(i)
    console.log(i)
})

//forEach 是同步且立即执行的，但它会受到回调函数中对数组的修改影响。如果你需要在遍历过程中修改数组，forEach 能够立即反映这些修改，但新增的元素不会被执行。