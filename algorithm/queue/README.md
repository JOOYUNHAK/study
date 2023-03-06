# :kissing: Queue :kissing:

### 먼저 들어온 것이 먼저 나간다라는 `선입선출(FIFO)`의 특징을 가지고 있으며, 새로운 값을 추가하는 것을 **enqueue**, 값을 제거하는 것을 **dequeue**라 함

<br>

### 배열로 구현이 가능하지만 **배열**에서의 `Queue`는 **enqueue**와 **dequeue**중 한 기능은 **상수시간**을 가질 수 없다.

<br>

### 따라서, **삽입**과 **삭제**가 주를 이루는 작업이 많은 경우 **상수시간**을 가지는 연결 리스트로 구현된 `Queue`가 더 우수하다.

### 시간 복잡도
- 삽입, 삭제: 연결리스트로 구현 시 O(1)
- 검색, 접근: 찾고자 하는 요소까지 순차적으로 접근해야 하므로 O(N)

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /**
     * Queue에 새로운 요소 추가
     * @param data 새로 넣을 요소의 data
     * @returns 현재 queue의 size
     */
    enqueue(data) {
        const newNode = new Node(data);
        if( !this.size ) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    /**
     * Queue에서 가장 처음 추가된 요소 제거
     * @returns 제거된 요소
     */
    dequeue() {
        if( !this.size ) return null;
        const deqNode = this.first;
        this.first = deqNode.next;
        if( this.size == 1 ) this.last = null;
        this.size--;
        return deqNode;
    }
}
```