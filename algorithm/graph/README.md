# :bowtie: Graph :bowtie:

### `그래프`는 유한하고 변할 수 있는 꼭지점이나 노드나 점들의 집합으로 구성된 데이터 구조로 쉽게 말해 노드와 노드가 선으로 연결되어 있는 형태를 띄는데 꼭지점들의 집합에 순서가 없는 경우에는 무방향 그래프, 순서가 있는 경우에 유방향 그래프라 한다.

<br>

### 두 정점이 하나의 경로로 이어져 있는 **트리**는 그래프의 한 종류이다.

<br>

### 그래프 용어
- `정점(Vertex)`: 노드
- `간선(Edge)`: 노드와 노드 사이의 연결
- `방향 그래프`: 정점과 정점 사이의 방향이 존재하는 그래프
- `무방향 그래프`: 정점과 정점 사이의 방향이 없는 그래프로 양방향으로 볼 수 있음
- `가중 그래프`: 간선에 부여된 값이 존재하는 그래프
- `비가중 그래프`:  간선에 부여된 값이 없는 그래프

### 구현방식에는 `인접 행렬`과 `인접 리스트`로 구현할 수 있는데 특정 간선에 대해서 접근은 `인접 행렬`, 넓게 퍼져있는 데이터를 다룰 때는 `인접 리스트`가 좋은 방안이지만 **공간차지**에 대해서는 실제 연결되어 있는 간선의 정보만 담으면 되는 `인접 리스트`가 훨씬 좋은 방법이다.

```javascript
    class Graph {
    constructor() { this.adjacencyList = {}; }

    /**
     * 인자로 받은 정점의 인접리스트 초기화
     * @param vertex 정점 
     */
    initEdgeList(vertex) {
        this.adjacencyList[vertex] = [];
    }

    /**
     * 인자로 받은 정점의 인접리스트 반환
     * @param vertex 정점
     * @returns 
     */
    getEdgeList(vertex) {
        return this.adjacencyList[vertex];
    }
    /**
     * 정점을 추가하는 함수로 추가 시 
     * 해당 정점의 간선 정보를 담을 빈 배열로 초기화
     * @param vertex 추가 할 정점
     */
    addVertex(vertex) {
        // 중복되는 정점이 없으면
        //  해당 정점의 인접 리스트 생성
        if( !this.adjacencyList[vertex] ) this.initEdgeList(vertex);
    }

    /**
     * 정점1과 정점2를 서로 연결하고
     * 서로의 인접 리스트에 추가
     * @param {*} 정점 1 
     * @param {*} 정점 2 
     */
    addEdge(vertex1, vertex2) {
        /* 생성 안된 정점이면 먼저 정점 추가 */
        if( !this.adjacencyList[vertex1] ) this.initEdgeList(vertex1); 
        if( !this.adjacencyList[vertex2] ) this.initEdgeList(vertex2);
        /* 해당 정점의 간선 리스트에 추가 */
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    /**
     * 정점1과 정점2가 연결된 간선을 제거
     * @param vertex1 정점1
     * @param vertex2  정점2
     */
    removeEdge(vertex1, vertex2) {
        // 존재하지 않는 정점과의 삭제면 Error
        if( !this.adjacencyList[vertex1] || !this.adjacencyList[vertex2] )
            throw new Error('해당 정점은 존재하지 않습니다');
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1); 
    }

    /**
     * 정점을 삭제하면서 해당 정점과
     * 연결된 정점들 삭제하는 함수
     * @param vertex 삭제 할 정점
     */
    removeVertex(vertex) {
		if( !this.adjacencyList[vertex] ) return;
        const removedVertexEdgeList = this.getEdgeList(vertex); // 삭제 할 정점의 인접 리스트
        /* 인접리스트를 돌면서 해당 정점의 인접리스트에서 삭제 */
        removedVertexEdgeList.map( (eachVertex) => {
            this.adjacencyList[eachVertex] = this.adjacencyList[eachVertex].filter(removeVertex => vertex !== removeVertex);
        })
        delete this.adjacencyList[vertex];
    }

    /**
     * DFS By Recursive 재귀
     * @param start DFS 순환 시작점 
     * @returns 순환한 순서
     */
    dfsByRecursive(start) {
        const visited = {}; // 방문현황
        const result = []; // 순서 결과
        const adjacencyList = this.adjacencyList; // 그래프

        function dfs(vertex) {
            if( visited[vertex] ) return null; // 방문한 노드면 return
            result.push(vertex); // 출력 결과에 포함
            visited[vertex] = true; // 방문처리
            adjacencyList[vertex].forEach( eachVertex => dfs(eachVertex) );
        }
        dfs(start);
        return result;
    }
    
    /**
     * DFS By Iterable
     * @param start DFS 순회 시작점
     * @returns 순회 결과
     */
    dfsByIterable(start) {
        const visited = {};
        const stack = [start];
        const result = [];

        visited[start] = true; // 시작점 방문처리
        while( stack.length ) { 
            const currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach( eachVertex => {
                if( !visited[eachVertex] ) {
                    visited[eachVertex] = true;
                    stack.push(eachVertex);
                }
            })
        }
        return result;
    }

    /**
     * BFS
     * @param start BFS 순환 시작점 
     * @returns 순환 결과
     */
    bfs(start) {
        const visited = {};
        const stack = [start];
        const result = [];

        visited[start] = true;
        while( stack.length ) {
            const currentVertex = stack.shift();
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach( eachVertex => {
                if( !visited[eachVertex] ) {
                    visited[eachVertex] = true;
                    stack.push(eachVertex);
                }
            })
        }
        return result;
    }
}
```