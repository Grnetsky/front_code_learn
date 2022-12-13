let arr = Array.from(new Array(11),() => Array.from(new Array(11),()=>0))
function print(arr){
    arr.forEach((item)=>{
        let txt = ''
        item.forEach((i)=>
                txt+=i+' '
        )
        console.log(txt)
    })
}
arr[0][2] = 1
arr[1][4] = 2
arr[0][3] = 2
arr[3][8] = 1
arr[2][3] = 1
print(arr)
// 稀疏数组就是用最少的空间去记录这个二维数组
// 通过观察后 可以这么定义稀疏数组  稀疏数组第一行用于记录 行数，列数，非0数字的个数（即有效数据的个数）剩下的行数用于记录有效数据所在的行，列，数据值
function arrToSparse(arr){
    let sparse = []
    let count = 0
    arr.forEach((item,i)=>{
        if(item instanceof Array){
            item.forEach((a,j)=>{
                if (a !== 0 ){
                    sparse[count+1] = [i,j,a]
                    count++
                }
            })
        }
        sparse[0] = [arr.length,arr[0].length,count]
    })
    return sparse
}
let ans = arrToSparse(arr)
console.log(ans)


