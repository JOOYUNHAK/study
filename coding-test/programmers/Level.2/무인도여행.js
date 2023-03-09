function solution(maps) {
    const answer =[];
    maps = maps.map(row => row.split(''));

    const [mapRow, mapCol] = [maps.length - 1, maps[0].length - 1];
    const [dr, dc] = [ [-1, 1, 0, 0], [0, 0, -1, 1] ];

    const queue = new Queue();

    for( let i = 0; i < maps.length; i++ ) {
        for( let j = 0; j < maps[0].length; j++ ) {
            let value = maps[i][j];
            if( value === 'X' ) continue;

            maps[i][j] = 'X';

            let sum = +value;

            queue.enqueue(i, j);

            while( queue.size ) {
                let [row, col] = queue.dequeue();
                for( let i = 0; i < 4; i++ ) {
                    const [nr, nc] = [row + dr[i], col + dc[i]];
                    if( nr < 0 || nr > mapRow || nc < 0 || nc > mapCol ) continue;
                    let nextValue = maps[nr][nc];
                    if( nextValue === 'X' ) continue;
                    maps[nr][nc] = 'X';
                    sum += (+nextValue);
                    queue.enqueue(nr, nc);
                }
            }
            answer.push(sum);
            sum = 0;
        }
    }
    if( !answer.length ) return [-1];
    answer.sort((a, b) => a - b)
    return answer
}

class Island {
    constructor(row, col) {
        this.position = [row, col];
        this.next = null;
    }
}

class Queue {
    constructor() { 
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(row, col) {
        const newIsland = new Island(row, col);
        if( !this.size ) {
            this.front = newIsland;
            this.rear = newIsland;
        } else {
            this.rear.next = newIsland;
            this.rear = newIsland;
        }
        this.size++;
    }

    dequeue() {
        const shiftSquare = this.front;
        if( this.size == 1 ) {
            this.front = null;
            this.rear = null;
            this.size--;
            return shiftSquare.position;
        }
        this.front = shiftSquare.next;
        this.size--;
        return shiftSquare.position;
    }
}