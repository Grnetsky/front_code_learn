// 设计思路：front指针的含义： front指向队列的第一个元素，arr[front]是队列的第一个元素
//  rear指针的含义：rear指向队列的最后一个元素的后一个位置  (希望`1空出一个空间作为约定)  队列满的条件是 （rear+1）%maxsize = front
// rear为空的条件是 rear = front
// front初始值0，rear初始值为0
