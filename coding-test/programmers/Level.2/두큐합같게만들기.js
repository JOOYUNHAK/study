function solution(queue1, queue2) {
    var answer = 0;
    const q1 = new Queue();
    const q2 = new Queue();
    let count = 0;
    for( let i = 0; i < queue1.length; i++ ) {
        q1.enqueue(queue1[i]);
        q2.enqueue(queue2[i]);
    }
    let [copyQ1, copyQ2] = [q1.getTotal(), q2.getTotal()];

    while( count <= (queue1.length * 3) ) {
        if( copyQ1 > copyQ2 ) {
            while( copyQ1 > copyQ2 ) {
                const element = q1.dequeue();
                if( !element ) break;
                copyQ1 -= element;
                copyQ2 += element;
                q2.enqueue(element);
                answer++;
                count++;
            }
            if( copyQ1 == copyQ2 ) return answer;
        }
        while( copyQ2 > copyQ1 ) {
            const element = q2.dequeue();
            if( !element ) break;
            copyQ2 -= element;
            copyQ1 += element;
            q1.enqueue(element);
            answer++;
            count++;
        }
        if( copyQ1 == copyQ2 ) return answer;
    }
    return -1;
}


class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class Queue {
    constructor() { 
        this.front = null;
        this.rear = null;
        this.total = 0;
    }

    enqueue(element) {
        const newNode = new Node(element);

        if( !this.front ) {
            this.front = newNode;
            this.rear = newNode;
        }
        else {
            this.rear.next = newNode;
            this.rear = newNode;    
        }        
        this.total += element;
    }

    dequeue() {
        if( !this.front ) return null;
        const popElement = this.front.element;
        if( this.front === this.rear ) {
            this.front = null;
            this.rear = null;
        } 
        else this.front = this.front.next;
        return popElement;
    }

    getTotal() {
        return this.total;
    }
}