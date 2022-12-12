# :anguished: Insertion Sort :anguished:
자신의 앞에 위치한 원소들을 비교해가면서 적절한 위치에 **삽입**되는 정렬 알고리즘으로, 위치를 찾으면 해당 위치 원소를 뒤로 밀고, 해당 위치에 **삽입**된다.   
따라서, 시작지점이 리스트의 첫번째가 아닌 두번째부터 시작한다.

시간복잡도는` O(N^2)`이지만 이미 거의 정렬되어 있는 데이터에 대해서는 `O(N)`의 시간복잡도를 가진다.

```javascript
function insertionSort(arr) {
    for( let i = 1; i < arr.length; i++ ) {
        let current = arr[i];
        let insertPosition = 0;
        for( let j = i - 1; j >= 0; j-- ) {
            //이미 앞이 정렬된 상태면 바로 for문 탈출
            if( current > arr[j ] ) {
                insertPosition = j + 1;
                break;
            }
            if( current < arr[j] ) {
                //앞에 원소들이랑 비교하면서 하나씩 뒤로 미룸
                arr[j+1] = arr[j];
            }
        }
        //자신보다 큰 값이 올 때 해당 index의 다음 위치가 적절한 삽입 위치
        arr[insertPosition] = current;
    }
}
```
