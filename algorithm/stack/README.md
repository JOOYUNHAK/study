# :worried: Stack List :worried:


### 스택은 `후입선출(LIFO)`의 특징을 가지며 `후입선출`이란 규칙만 따르면 **Stac**k이 될 수 있음

<br>

### `단일 연결 리스트`의 `push`와 `pop`으로도 구현이 가능하지만 **Stack**에서의 **push**와 **pop**은 상수 시간을 가져야 하므로 마지막 노드까지 탐색해야 하는 `단일 연결 리스트`의 `pop`은 적합하지 않음

<br>

### 활용사례
- 함수 호출 
- 인터넷 방문 기록
- Undo나 Redo처럼 마지막 명령에 대해서 수행 작업


### 시간 복잡도
- 삽입, 삭제: 단순 Stack의 첫번째 요소만 접근하므로 O(1)
- 검색, 접근: 찾고자 하는 요소까지 순차적으로 탐색해야 하므로 O(N)
```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /**
     * Stack에새로운 Node 추가
     * @param data 새로 추가할 Node data
     * @returns 추가 되고 난 후 Stack의 size
     */
    push(data) {
        const newNode = new Node(data);
        if( !this.size ) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const existFirstNode = this.first; // 기존 첫번째 노드
            newNode.next = existFirstNode; // 새로운 노드의 다음 node로 연결
            this.first = newNode;
        }
        return ++this.size;
    }

    /**
     * Stack의 첫번째 Node 제거 
     * @returns 제거된 Node
     */
    pop() {
        if( !this.size ) return null; // stack이 비어있을 경우
        const popNode = this.first;
        if( this.size == 1 ) {  // stack에 1개의 node가 있을 경우
            this.last = null;   // last pointer도 update
        }
        this.first = popNode.next;
        this.size--;
        return popNode;
    }
}
```