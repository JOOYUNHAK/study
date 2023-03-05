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

    shift() {
        if( !this.length ) return null;
        let shiftNode;
        shiftNode = this.head;
        this.head.next = this.head;
        if( this.length == 1 ) this.tail = this.head;
        return shiftNode;
    }
}

const list = new SinglyLinkedList();
list.push('hi');
list.push('there');

