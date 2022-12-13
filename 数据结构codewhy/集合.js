// 集合  无序 不重复的元素构成  不能通过下标访问 不能存在重复对象
// 集合比较常见的就是哈希表

class Set{
    items = {}
    add(value){
        // 判断当前集合中是否有某个元素
        if(this.has())
        this.items[value] = value
        return true
    }
    // 判断集合中是否有该元素
    has(value){
        return this.items.hasOwnProperty(value)
    }
    remove(value){
        return delete this.items[value]
    }
    clear(){
        this.items = {}
    }
    size(){
        return Object.keys(this.items).length
    }
    values(){
        return Object.values(this.items)
    }
    union(otherSet){
        let unionSet = new Set()
        let values = this.values()
        values.forEach((item)=>{
            unionSet.add(item)
        })
        if(otherSet instanceof Set){

        }else {
            throw new Error(otherSet + 'is not a set')
        }
    }
    interSection(otherSet){

    }
}
// 并集
// 交集
// 差集
// 子集
