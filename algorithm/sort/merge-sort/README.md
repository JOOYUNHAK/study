# :anguished: Merge Sort :anguished:
정렬되지 않은 리스트가 주어졌을 때 분할한 각 리스트의 길이가 1이 될 때까지 계속해서 분할한다. => **절반**씩 분할하므로 분할 자체는 `O(log N)`

분할된 각각의 리스트들을 병합하면서 정렬이 완료된 부분리스트를 생성하고, 마지막에 부분리스트가 하나가 되었을 때 합병이 완료된 상태 => 리스트를 합병할 때 값을 비교하면서 합병하므로 `O(N)`

따라서 전체 시간복잡도는 `O(N log N)`

```javascript
function merge(left, right) {
    //i: 왼쪽 배열 포인터, j: 오른쪽 배열 포인터
    let [i, j] = [0, 0];
    let result = [];
    while( i < left.length && j < right.length ) {
        if( left[i] < right[j] ) {
            result.push(left[i]);
            i++;
            continue;
        }
        result.push(right[j]);
        j++;
    }
    //만약 왼쪽 배열이 남아있을 경우
    if( i < left.length ) 
        result = [...result, ...left.slice(i)]
    //오른쪽 배열이 남아있을 경우
    if( j < right.length ) 
        result = [...result, ...right.slice(j)]
    
    return result;
}

function mergeSort(arr) {
    if( arr.length == 1 )
        return arr;
        //배열의 길이가 1이 될때까지 재귀적으로 호출
    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));
    return merge(left, right);
}
```
