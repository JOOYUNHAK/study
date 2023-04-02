class Tree {
    constructor() {
        this.adjacencyList = {};
    }

    initEdgeList(node) {
        this.adjacencyList[node] = [];
    }

    insertEdge(node1, node2) {
        if( !this.adjacencyList[node1] ) this.initEdgeList(node1);
        if( !this.adjacencyList[node2] ) this.initEdgeList(node2);

        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1);
    }

    getAdjacencyList() {
        return this.adjacencyList;
    }

    getNodeList() {
        return Object.keys(this.adjacencyList);
    }
}

function solution(n, wires) {
    var answer = 0;

    const tree = new Tree();

    wires.map(([node1, node2]) => tree.insertEdge(node1, node2));

    const nodeList = tree.getNodeList();
    const adjacencyList = tree.getAdjacencyList();
    let max = Infinity;
    
    for( let i = 0; i < nodeList.length; i++ ) {
        let cAdjacencyList = {...adjacencyList};

        const currentNode = nodeList[i];
        const length = cAdjacencyList[currentNode].length;
        for( let j = 0; j < length; j++ ) {
            cAdjacencyList = {...adjacencyList};
            const removedNode = cAdjacencyList[currentNode][j];
            removeEdge(cAdjacencyList, currentNode, removedNode);
            const count1 = getEdgeCount(cAdjacencyList, currentNode);
            const count2 = getEdgeCount(cAdjacencyList, removedNode);
            const dif = Math.abs(count1 - count2);
            if( dif <= max ) {
                max = dif;
                answer = dif;
            }
        }
    }
    return answer;
}

function removeEdge(tree, node1, node2) {
    tree[node1] = tree[node1].filter((node) => +node !== +node2);
    tree[node2] = tree[node2].filter((node) => +node !== +node1);
}

function getEdgeCount(tree, node) {
    const stack = [];
    const visited = new Set();

    tree[node].map((a) => {
        stack.push(a);
        visited.add(node + '.' + a);
    });

    while( stack.length ) {
        const popNode = stack.pop();
        tree[popNode].map((n) => {
            if( !visited.has(n + '.' + popNode) ) {
                stack.push(n);
                visited.add(popNode + '.' + n);
            }
        })
    }
    return visited.size+1;
}
