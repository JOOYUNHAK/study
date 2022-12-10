# :eyes: Binary Search :eyes:
꼭 오름차순으로 **정렬**된 리스트에서만 사용 가능한 검색 알고리즘이지만, `O(N)`의 시간복잡도를 가지는 `선형 검색`을 사용할 수 있지만, 단계를 수행할 때마다 찾아야 하는 범위가 반씩 줄어들므로 `O(log N)`의 시간복잡도를 가지는 이진 검색이 더 효율적이다.  

매 단계마다 처음과 끝의 중앙 index를 지정해서 값을 비교하여 다음 단계의 처음 과 끝 index를 갱신  
값을 찾지 못할 경우 **무한루프**에 빠지므로 탈출 조건 추가해야됨

```javascript
/**
 * @param {*} arr 정렬된 리스트 
 * @param {*} findNum 찾고자 하는 요소 
 * @returns 값이 없으면 -1, 값이 있으면 해당 요소의 index
 */
function binarySearch(arr, findNum){
    //처음 시작과 끝 index
    let [start, end] = [0, arr.length - 1]; 
    //처음 중앙 index
    let middle = Math.floor( (start + end) / 2);

    //찾고자 하는 요소를 못 찾을 동안 반복
    while( arr[middle] != findNum ) {
        //찾고자 하는 요소가 없을 경우 break
        if( start > end )
            break;
        //요소가 중앙값 보다 클 경우: start 갱신
        //요소가 중앙값 보다 작을 경우: end 갱신
        arr[middle] > findNum ? end = middle - 1 : start = middle + 1;
        middle = Math.floor( (start + end) / 2);
    }
    
    if( arr[middle] == findNum )
        return middle;
    
    return -1;
}
```
