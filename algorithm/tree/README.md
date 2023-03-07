# :open_mouth: Tree :open_mouth:

### 트리
노드로 이루어진 자료구조로 각 노드는 **0~N개** 만큼의 자식 노드를 가질 수 있다
- `루트 노드`: 부모가 없는 노드로 트리는 하나의 루토 노드를 가짐
- `단말 노드`: 자식이 없는 노드
- `간선`: 노드를 연결하는 선
- `레벨`: 루트 노드부터 노드까지 연결된 간선 수의 합
- `차수`: 각 노드의 자식의 개수
- `깊이`: 루트 노드부터 노드까지 연결된 간선 수의 합


### 이진트리
트리의 한 종류로 각 노드가 **최대 두 개**의 자식 노드를 가질 수 있는 트리

### 이진 탐색 트리
데이터가 특정한 순서로 저장되는 `이진 트리`의 특별한 종류로 부모 노드의 왼쪽에 있는 모든 노드는 언제나 부모보다 **작고**, 부모 노드의 오른쪽에 있는 모든 노드는 언제나 부모보다 **크다**

### 이진 탐색 트리의 시간복잡도
- 삽입, 검색, 삭제: 루트 노드부터 자식 노드로 탐색하면서 값이 큰지 작은지를 비교하여 평균적으로 `O(log N)`의 시간복잡도를 가지지만 데이터가 한쪽으로 치우친 선형 구조의 이진 탐색 트리의 경우 `O(N)`의 시간복잡도를 가짐

### 이진 탐색 트리에서의 삭제 연산
- 삭제하려는 노드가 `단말 노드`인 경우: 부모 노드와의 연결을 끊으면 됨
- 삭제하려는 노드가 `하나의 서브트리`만 가지고 있는 경우: 자기 노드는 삭제하고 서브 트리만 자기 노드의 부모 노드에 붙여주면 됨
- 삭제하려는 노드가 `두개의 서브트리`를 가지고 있는 경우: 왼쪽 서브트리에서 가장 큰 값(오른쪽에 있는 노드)이나 오른쪽 서브트리에서 가장 작은 값(가장 왼쪽에 있는 노드)를 자기 노드의 위치로 이동해주면 됨

### 트리의 순회
- `전위 순회`: Root 노드 방문 -> 왼쪽 서브 트리 전위 순회 -> 오른쪽 서브 트리 전위 순회
- `중위 순회`: 왼쪽 서브 트리 중위 순회 -> Root 노드 방문 -> 오른쪽 서브 트리 중위 순회
- `후위 순회`: 왼쪽 서브 트리 후위 순회 -> 오른쪽 서브 트리 후위 순회 -> Root 노드 방문

트리에서 `DFS`와 `BFS`를 언제 사용할지는 `공간복잡도`를 생각해서 사용하자

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.count = 0;
    }
};

class BinarySearchTree {
    constructor() { this.root = null; }
    /**
     * BST에 새로운 노드 추가
     * @param data 새롭게 추가할 Node의 data
     * @returns update된 binary search tree
     */
    insert(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            /* 추가하려는 data가 더 작은 경우 */
            if (data < current.data) {
                if (current.left) {
                    current = current.left;
                    continue;
                }
                current.left = newNode;
                return this;
            }
            /* 추가하려는 data가 더 큰 경우 */
            if (data > current.data) {
                if (current.right) {
                    current = current.right;
                    continue;
                }
                current.right = newNode;
                return this;
            }
            /* 추가하려는 data가 이미 존재하는 경우 */
            current.count++;
            return this;
        }
    }
    /**
     * BST에서 특정 Node를 찾는 메소드
     * @param data 찾고자 하는 Node의 data
     * @returns 찾은 Node, 없으면 null
     */
    find(data) {
        if (!this.root) return null;
        let current = this.root;
        while (current) {
            if (data === current.data)
                return current;

            if (data < current.data) {
                current = current.left;
                continue;
            }
            if (data > current.data) {
                current = current.right;
                continue;
            }
        }
        return null;
    }

    delete(data) {
        if (!this.root) return false;
        let current = this.root; // 현재 노드
        let parent = this.root; // 부모 노드

        while (current) {
            /* 찾고자 하는 값이 더 작은 경우 */
            if (data < current.data) {
                parent = current;
                current = current.left;
                continue;
            }
            /* 찾고자 하는 값이 더 큰 경우 */
            if (data > current.data) {
                parent = current;
                current = current.right;
                continue;
            }
            if (data === current.data) {
                /* Leaf Node인 경우 */
                if (!current.left && !current.right) {
                    /* 부모 노드와의 값 비교에 따라 null */
                    parent.data > current.data ?
                        parent.left = null : parent.right = null
                    return true;
                }
                /* 자식 노드가 하나인 경우 */
                if (!current.left || !current.right) {
                    /* 왼쪽 자식 노드가 있는 경우 */
                    if (current.left) {
                        current.data = current.left.data;
                        current.left = null;
                    }
                    /* 오른쪽 자식 노드가 있는 경우 */
                    else {
                        current.data = current.right.data;
                        current.right = null;
                    }
                    return true;
                }
                /* 자식 노드가 2개인 경우( 오른쪽 서브트리에서 최솟값) */
                return deleteTwoChildNode(current, parent);
            }
        }
        return false;
    }
    /**
     * 현재 노드의 오른쪽 서브트리 중 제일 작은 값을  
     * 가지고 있는 노드를 찾아 서로 변경하는 함수      
     * @param currentNode 현재 노드
     * @param parent  부모 노드
     */
    deleteTwoChildNode(currentNode, parent) {
        /* 오른쪽 서브트리를 탐색하기 위해 
            부모 노드를 현재 노드로 변경 이후 탐색 진행
        */
        const deleteNode = currentNode;
        parent = currentNode;
        let current = currentNode.right;
        while (current.left) {
            parent = current;
            current = current.left;
        }
        /* 삭제하려는 노드와 최솟값을 가지고 있는 노드 변경 */
        deleteNode.data = current.data;
        parent.data > current.data ?
            parent.left = current.left : parent.right = current.right
        return true
    }

    /**
     * 너비 우선 탐색
     * @returns 순서대로 방문한 노드의 데이터
     */
    bfs() {
        let queue = [], visitedNode = [];
        queue.push(this.root); // 루트 노드를 queue 첫번째로 추가
        while( queue.length ) {
            const firstNode = queue.shift();
            /* 자식 노드가 있으면 queue에 추가 */
            if( firstNode.left ) queue.push(firstNode.left);
            if( firstNode.right ) queue.push(firstNode.right);
            visitedNode.push(firstNode.data); // 방문한 노드 처리
        }
        return visitedNode;
    }

    /* 전위, 중위, 후위의 3가지 순회방법을 깊이 우선 탐색으로 구현 */
    dfsByPreOrder() {
        let visitedNode = [];
        function preOrderTraverse(node) {
            visitedNode.push(node.data);
            if( node.left ) preOrderTraverse( node.left );
            if( node.right ) preOrderTraverse( node.right );
        }
        return visitedNode;
    }

    dfsByInOrder() {
        let visitedNode = [];
        function inOrderTraverse(node) {
            if( node.left ) inOrderTraverse(node.left);
            visitedNode.push(node.data);
            if( node.right ) inOrderTraverse(node.right);
        }
        inOrderTraverse(this.root);
        return visitedNode;
    }

	dfsByPostOrder() {
		let visitedNode = [];
		function postOrderTraverse(node) {
			if( node.left ) postOrderTraverse(node.left);
			if( node.right ) postOrderTraverse(node.right);
			visitedNode.push(node.data);
		}
		postOrderTraverse(this.root);
		return visitedNode;
	}
}
```