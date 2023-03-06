# :unamused: Singly Linked List :unamused:
### 한 방향으로만 움직일 수 있으며, 메모리 상에 흩어져 있는 `노드`들을 통해 다음 `노드`의 정보를 알 수 있는 것
- 삽입
    + 맨 앞에 삽입하든 맨 뒤에 삽입 하든 head 또는 tail만 작업해주면 되므로 O(1)
- 삭제
    + 맨 앞 노드 삭제: head를 head의 next로 변경해주고, 원래의 head를 끊어내기만 하면되므로 O(1)
    + 맨 뒷 노드 삭제: tail의 이전 노드를 먼저 찾아야 하므로 O(N)시간 소요  
- 검색과 접근
    + 순서대로 해당 노드까지 노드를 따라가야 하므로 O(N)

따라서, `삽입`이나 `삭제`의 작업이 빈번히 일어나고 특정 인덱스의 `접근`에 대한 필요성이 별로 없는 경우 `단방향 연결 리스트`가 더 우수하지만, `Array`의 경우 특정 인덱스에 대해 `O(1)`시간으로 접근할 수 있기 때문에 특정 인덱스의 `접근`이 많다면 `Array`가 더 우수

``` javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0; // list length
        this.head = null; // head pointer
        this.tail = null; // tail pointer
    }

    /**
     * 기존 Linked List의 마지막에 새로운 Node 추가
     * @param data 추가할 data 
     * @returns 현재 Linked List 반환
     */
    push(data) {
        const newNode = new Node(data);

        /* 중간에 노드들이 있다면 */
        if (this.length) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.tail = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * 기존 Linked List의 마지막 Node 제거
     * @returns 제거된 Node
     */
    pop() {
        if (!this.length) return null;

        let popNode; // 꺼낸 노드
        if (this.length == 1) {
            popNode = this.tail;
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head; // head pointer copy
            while (current.next != this.tail) // 마지막 node의 전 node를 찾기위해
                current = current.next;
            popNode = this.tail;
            current.next = null; // 새로운 마지막 노드
            this.tail = current; // 마지막 노드 update
        }
        this.length--;
        return popNode;
    }

    /**
     * 기존 Linked List의 첫번째 Node 제거
     * @returns 제거된 Node
     */
    shift() {
        if (!this.length) return null;
        let shiftNode = this.head; // 맨 처음 노드
        this.head = this.head.next;
        if (this.length == 1) this.tail = null;
        this.length--;
        return shiftNode;
    }
    /**
     * 기존 Linked List의 첫번째에 Node 추가
     * @param data 추가할 data
     * @returns 현재 Linked List 반환
     */
    unshift(data) {
        const newNode = new Node(data);
        newNode.next = this.head; // 기존의 맨 앞 노드 next에 추가
        this.head = newNode; // head pointer update
        if (!this.head.next) this.tail = newNode; // 첫 번째 노드일 경우 tail도 update
        this.length++;
        return this;
    }
    /**
     * index번째에 있는 Node 반환
     * @param index 얻고자 하는 Node의 위치 
     * @returns 범위가 벗어나면 null, 존재하면 해당 Node
     */
    get(index) {
        if( index < 0 || index > this.length ) return null; // 범위가 벗어나면
        let [counter, currentPointer] = [0, this.head];
        while( counter != index ) {
            counter++;
            currentPointer = currentPointer.next;
        }
        return currentPointer;
    }
    /**
     * 해당 index에 있는 Node의 data 변경
     * @param index update하려는 Node의 위치
     * @param data 변경할 data
     * @returns update 성공 여부
     */
    update(index, data) {
        const findNode = this.get(index);
        if( findNode ) {
            findNode.data = data;
            return true;
        }
        return false;
    }
    /**
     * 해당 index에 새로운 Node 삽입
     * @param index 삽입하고자 하는 위치
     * @param data 삽입하려는 Node의 data
     * @returns 삽입 성공 여부
     */
    insert(index, data) {
        if( index == 0 ) return this.unshift(data);
        if( index == this.length ) return this.push(data);
        const preNode = this.get(index-1); // 삽입할 위치 이전 node
        if( preNode ) {
            const newNode = new Node(data);
            newNode.next = preNode.next;
            preNode.next = newNode;
            this.length++;
            return true;
        }
        return false;
    }
    /**
     * 해당 index에 있는 Node 제거
     * @param index 제거하고자 하는 Node의 위치
     * @returns 제거 성공 여부
     */
    remove(index) {
        if( index == 0 ) return this.shift();
        if( index == this.length ) return this.pop();
        const preNode = this.get(index-1);
        if( preNode ) {
            const removeNode = preNode.next;
            preNode.next = removeNode.next;
            removeNode.next = null;
            this.length--;
            return true;
        }
        return false;
    }
    /**
     * 기존 Linked List를 거꾸로 연결
     * @returns reverse된 Linked List 반환
     */
    reverse() {
		let [currentPointer, nextNode, preNode] = [this.head, this.head.next, null];
		this.head = this.tail; 
		this.tail = currentPointer; // tail과 기존 head 변경
		for( let i = 0; i < this.length; i++ ) {
			currentPointer.next = preNode; // 현재 가리키고 있는 node의 next를 기존의 이전 노드로
			preNode = currentPointer; // 이전 노드를 현재 가리키고 있는 node로 update
			currentPointer = nextNode; // 현재 가리키고 있는 node를 다음 node로 update
			if( i == this.length ) return; // 마지막 노드면 next node의 next는 없으므로 return
			nextNode = currentPointer.next; // next node를 현재 가리키고 있는 node의 다음 node로
			return this;
		}
	}
}
```

