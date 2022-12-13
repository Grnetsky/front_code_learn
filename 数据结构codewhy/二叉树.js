// 二叉树
// 特性：1.一个二叉树第i层最多有2的i-1次方个节点  2.深度为k的二叉树的最大节点总数为   2的k次方 - 1   3.对于任何费控二叉树T，若n0表示叶节点的个数，n2是度为w的非叶节点个数，那么两者关系满足 n0 = n2 + 1

//  完全二叉树 ： 除了二叉树最后一层 其他各层的节点数到达最大个数 且最后一层从左向右的节点也连续存在，只缺右节点
// 完美二叉树  每层都满了

// 二叉树的存储   一般用链表表示   （用数组表示完全二叉树时会造成空间浪费）


// 二叉搜索树（BST Binary Search Tree 也叫 二叉排序树，二叉查找数）
// 二叉搜索树需要满足的性质：1.非空左子树的所有键值小于其节点的键值  2.非空右子树的
// 所有键值大于其根节点的键值 3.左右子树本身也都是二叉搜索树   => 所有左子树小于根节点 所有右子树大于根节点
// 特点： 相对较小的值总是在左节点上，相对较大的值总是保存在右节点上  => 二分查找可以转换为二叉搜索树


// 节点类封装
class Node{
    right = null
    left = null
    constructor(key) {
        this.key = key
    }
}
// 二叉搜索树的封装
class BinarySearchTree{
    root = null
    values = ""
    // 递归比较
    #insertNode(node,newNode){
        if(newNode.key < node.key){  //向左查找
            if(!node.left){
                node.left = newNode
            }else {
                this.#insertNode(node.left,newNode)
            }
        }else{ // 向右查找
            if(!node.right){
                node.right = newNode
            }else{
                this.#insertNode(node.right,newNode)
            }
        }
    }
    // insert 插入方法
    insert(key){
        let newNode = new Node(key)
        //判断根节点是否有值
        if(!this.root){
            this.root = newNode
        }else{
            this.#insertNode(this.root,newNode)
        }
    }

    #printList(k) {
        this.values += k
    }
    // search 查找方法

    // put 修改操作 =》 与查找操作一样

    // inOrderTraverse 通过中序遍历方式遍历所有节点  遍历其左子树   访问根节点  遍历其右子树
    inOrderTraverse(){
    this.#inOrderTraverseNode(this.root,this.#printList.bind(this))
    }
    #inOrderTraverseNode(node,handler){
        if(node){
            this.#inOrderTraverseNode(node.left,handler)
            handler(node.key)
            this.#inOrderTraverseNode(node.right,handler)
        }
    }
    // preOrderTraverse 通过先序遍历方式遍历所有节点  先访问根节点 按先序遍历其左子树  先序遍历其右子树
    preOrderTraverse(){
        this.#preOrderTraverseNode(this.root,this.#printList.bind(this))
    }
    #preOrderTraverseNode(node,handler){
        if(node){
            handler(node.key)
            this.#preOrderTraverseNode(node.left,handler) // 先全部把遍历左节点压入执行栈
            this.#preOrderTraverseNode(node.right,handler) // 所有左节点压入栈中后再压入右节点
        }
    }
    // postOrderTraverse 通过后序遍历方式遍历所有节点

    // max 获取最大值

    // min 获取最小值

    // remove(key) 删除某项

}
// 测试
let bst = new BinarySearchTree()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)

bst.inOrderTraverse()
console.log(bst.values)
bst.values = ''
bst.preOrderTraverse()
console.log(bst.values)
