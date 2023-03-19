class Node{
    left=null
    right=null
    constructor(data) {
        this.data = data
    }
}
// 左小右大
class BinarySearchTree{
    root=null
    #insertNode(preNode,node){
        if(preNode.data>node.data){  //当前节点比新增节点大
            if(!preNode.left){
                preNode.left = node
            }else{
                this.#insertNode(preNode.left,node)
            }
        }else{
            if(!preNode.right){
                preNode.right = node
            }else{
                this.#insertNode(preNode.right,node)
            }
        }
    }

    /**
     * @param data {int} 数字类型
     * @description 节点插入方法
     * */
    insert(data){
        let n = new Node(data)
        this.root?(this.#insertNode(this.root,n)):this.root = n // root根节点是否存在 存在则插入 不存在则设为根节点
    }


    // 遍历二叉树

    /**
     * @description 先序遍历二叉树
     * */
    preOrder(node,handler){
        if(node){
            handler(node.data)
            this.preOrder(node.left,handler)
            this.preOrder(node.right,handler)
        }
    }


    /**
     * @description 中序遍历二叉树  =》 升序遍历*/
    inOrder(node,handler){
        if(node){
            this.inOrder(node.left,handler)
            handler(node.data)
            this.inOrder(node.right,handler)
        }
    }

    /**
     * @description 后序遍历二叉树
     * */
    postOrder(node,handler){
        if(node){
            this.postOrder(node.left,handler)
            this.postOrder(node.right,handler)
            handler(node.data)
        }
    }

    /**
     * @description 获取二叉树最小值*/
    minValue(node){
        let current = node
        while(current.left){
            current = current.left
        }
        return current.data
    }

    /**
     * @description 获取二叉树最大值*/
    maxValue(node){
        let current = node
        while(current.right){
            current = current.right
        }
        return current.data
    }
    find(key){
        let current = this.root
        while (!(current.data === key)){
            if(current.data>key){
                current = current.left
            }else {
                current = current.right
            }
            if(!current)return null

        }
        return current

    }
    delete(key) {
        //1. 先找到节点
        let current = this.root
        let parent = null// 指向其父亲
        let isLetChild = false// 其父节点的哪个位置
        while(current.data!==key){
            parent = current
            if(current.data > key){
                current = current.left
                isLetChild = true
            } else{
                current = current.right
                isLetChild = false
            }
            if (current == null)return false
        }

        //2.1 删除的节点是叶子节点
        if(current.left === null && current.right === null){ // 是否是删除的是叶子节点或者根节点
            if(current === this.root)current = null  // 删除根节点
            else{  // 删除叶子节点
                isLetChild? parent.left = null : parent.right = null
            }
            return true  // 删除成功
        }else if(current.left === null) {  // 2.2 删除的节点有一个右子节点
            if(current === this.root)this.root = current.right // 此节点为根节点
            else if(isLetChild){
                parent.left = current.right  //
            }else {
                parent.right = current.right
            }
        }else if(current.right === null){ // 2.2 删除的节点有一个左子节点
            if(current === this.root)this.root = current.left // 此节点是否为根节点
            else if(isLetChild){
                parent.left = current.left
            }else {
                parent.right = current.left
            }
        }
        // 2.3 删除的节点有两个子节点
    }

}

let bst = new BinarySearchTree()
bst.insert(5)
bst.insert(10)
bst.insert(4)
bst.insert(3)
bst.insert(15)
bst.insert(1)
bst.insert(8)
bst.insert(2)
bst.insert(12)

bst.preOrder(bst.root,handler)// 5 4 3 2 10 7 8 12
bst.inOrder(bst.root,handler)
bst.postOrder(bst.root,handler)
function handler(data){
    console.log(data)
}

console.log(bst.minValue(bst.root))
console.log(bst.maxValue(bst.root))
console.log(bst.find(1))
