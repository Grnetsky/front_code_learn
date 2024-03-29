// 二叉搜索树最好的状态  平衡树   效率高

// 规则：
//  1.满足基本的二叉树要求
//  2.节点是红色或黑色
//  3.根节点是黑色
//  4.每个叶子节点都是黑色的空节点（nil节点）
//  5.每个红色节点的两个子节点都是黑色（从每个叶子节点到根节点所有路径上不能有两个连续的红色节点）
//  6.从任一节点到其他每个叶子节点的所有路径都包含相同数目的黑色节点


// 特性：
//  1.从根到叶子的最长可能路径不会超过最短可能路径的两倍
//  2.

// 三种变换  变色 左旋转 右旋转

