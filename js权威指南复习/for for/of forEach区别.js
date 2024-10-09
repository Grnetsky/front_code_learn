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
