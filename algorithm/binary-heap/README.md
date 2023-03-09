# :sunny: Binary Heap :sunny:

`힙`은 **트리**의 한 종류로 최대 **두개의 자식 노드**를 가지는 힙을 `이진 힙`이라 하는데 자식 노드가 부모 노드보다 크면 `최소 이진 힙`, 자식 노드가 부모 노드보다 작으면 `최대 이진 힙`이라 한다. 

**형제 노드**끼리는 순서가 없는 특징을 띄며, 항상 왼쪽부터 채워진다는 특징 때문에 한쪽으로 치우치지 않아 **최적의 공간**을 사용할 수 있다.

이진 힙을 배열로 구현할 때의 부모, 자식 노드의 인덱스
- `부모`: Math.floor( (현재 나의 인덱스 - 1) / 2 )
- `왼쪽 자식`: 현재 나의 인덱스 * 2 + 1
- `오른쪽 자식`: 현재 나의 인덱스 * 2 + 2

```javascript
class MaxBinaryHeap {
    constructor() { this.values = [41,39,33,18,27,12]; }

    /**
     * 왼쪽부터 채워지는 이진 힙의 특성 상 마지막에 요소 추가
     * @param element 추가할 요소
     */
    insert(element) {
        this.values.push(element); // 요소 추가
        this.bubbleUp(element);
    }

    /**
     * 단순 마지막에 추가되므로 최대 이진 힙 재구성
     * @param element 마지막에 추가된 요소 
     */
    bubbleUp(element) {
        let currentIndex = this.values.length - 1;
        /* 현재 위치가 루트 노드가 아닌 경우 */
        while( currentIndex ) {
            const parentIndex = Math.floor( (currentIndex - 1) / 2 ); // 부모 인덱스
            const parentValue = this.values[parentIndex]; // 부모 노드의 값
            if( element <= parentValue ) break; // swap이 없는 경우 종료
            /* 부모와 자리 교체 이후 인덱스 부모로 설정 */
            this.values[currentIndex] = parentValue;
            this.values[parentIndex] = element;
            currentIndex = parentIndex;
        }
    }

    /**
     * 최대 이진 힙에서 최대 값 제거한 이후 최대 이진 힙 재구성
     * @returns 제거된 최대 값
     */
    extractMax() {
        const lastValue = this.values.pop(); // 힙의 마지막 값
        if( !this.values.length ) return lastValue; // 노드가 하나 있었다면
        const maxValue = this.values[0]; // 최대 값
        this.values[0] = lastValue;
        this.bubbleDown(); // 힙 재구성
        return maxValue;
    }

    /**
     * 
     * @returns 
     */
    bubbleDown() {
        let currentIndex = 0;
        while( true ) {
            let leftChildIndex = currentIndex * 2 + 1;
            let rightChildIndex = currentIndex * 2 + 2;
            /* 오른쪽 자식이 전체 크기를 벗어난다면 */
            if( rightChildIndex >= this.values.length ) {
                /* 왼쪽 자식도 크기를 벗어난다면 */
                if( leftChildIndex >= this.values.length ) break;
                /* 왼쪽 자식은 크기를 벗어나지 않는데 더 크다면 */ 
                if( this.values[leftChildIndex] <= this.values[currentIndex] ) break; 
                this.swap(leftChildIndex, currentIndex); // 왼쪽 자식과 위치 변경
                currentIndex = leftChildIndex; // 현재 위치를 기존 왼쪽 자식의 위치로
                continue;
            }
            /* 두 개의 자식 노드가 존재할 경우 */
            const bigChildIndex = this.getMaxChildIndex(leftChildIndex, rightChildIndex);  // 둘 중 더 큰 자식 인덱스
            if( this.values[bigChildIndex] <= this.values[currentIndex] ) break; 
            this.swap(bigChildIndex, currentIndex);
            currentIndex = bigChildIndex;
            continue;
        }
    }

    /**
     * 부모 값이 자식보다 작을 경우 둘의 값 변경
     * @param {*} childIndex 자식의 인덱스
     * @param {*} currentIndex 현재 위치한 인덱스
     */
    swap(childIndex, currentIndex) {
        const childValue = this.values[childIndex];
        this.values[childIndex] = this.values[currentIndex];
        this.values[currentIndex] = childValue;
    }

    /**
     * 
     * @param {*} leftChildIndex 왼쪽 자식 인덱스
     * @param {*} rightChildIndex 오른쪽 자식 인덱스
     * @returns 두 자식 중 더 큰 자식의 인덱스
     */
    getMaxChildIndex(leftChildIndex, rightChildIndex) {
        return this.values[leftChildIndex] > this.values[rightChildIndex] ? leftChildIndex : rightChildIndex
    }
}





```