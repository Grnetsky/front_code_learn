class DirectedGraph {
    constructor() {
        this.adjacencyList = {}; // 使用对象来存储邻接表
    }

    // 添加一个新顶点
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // 添加一个有向边，从vertex1指向vertex2
    addEdge(vertex1, vertex2) {
        // 确保两个顶点都存在
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        // 在vertex1的邻接表中添加vertex2
        this.adjacencyList[vertex1].push(vertex2);
    }

    // 显示图的内容
    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + ' -> ' + this.adjacencyList[vertex].join(', '));
        }
    }
}

// 使用示例
const graph = new DirectedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'A');

graph.display();
