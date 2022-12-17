# :banana: Quick Sort :banana:
`Quick Sort`는 **정렬** 알고리즘으로 **분할 정복** 알고리즘을 사용한다. 리스트에서 피벗을 고르고 피벗보다 작은지 큰지에 따라 두 개의 하위 배열로 분할하여 작동한다. 빠른 정렬들의 특징과 같이 동일한 항목의 순서가 유지되지 않는다.

정렬되어 있는 경우 피벗을 맨 앞이나 맨 뒤를 선택할 경우 최악의 시간복잡도 `O(N^2)`을 따름. 이 점을 해결하기 위해 항상 피벗을 하위 리스트의 **중간 요소**를 피벗으로 선정한다.

`Hoare의 파티션 체계`: Hoare의 분할 체계는 두 개의 리스트의 양 끝에서 시작하는 포인터가 존재하며, 왼쪽 포인터는 피벗 요소보다 더 큰 값을, 오른쪽 포인터는 더 작은 값을 찾아 포인터가 증가하고 감소한다. 두 포인터가 교차되면 종료하고 분할 된 하위 리스트에 대해 위의 과정 반복

```javascript
function getBoundaryIndex(arr, start, end) {
    // pivot 중간 요소로 설정
	const midPivotIndex = Math.floor( (start + end) / 2 );
	
	while( start <= end ) {
        // 왼쪽에서 pivot보다 큰 값 찾기
		while(arr[start] < arr[midPivotIndex])
			start += 1;
        // 오른쪽에서 pivot보다 작은 값 찾기
		while(arr[end] > arr[midPivotIndex])
			end -= 1;

        // 두 포인터의 요소가 잘못된 위치였으면 올바르게 정렬
		if( start <= end ) {
			[arr[start], arr[end]] = [arr[end], arr[start]];
			start += 1;
			end -= 1;
		}
	}

	return start;
}

// 가장 처음 정렬 할 리스트만 주어졌을 때, start와 end값 초기화
function quickSort(arr, start = 0, end = arr.length - 1) {

	if( start >= end )
		return;
	
    // 분할 할 경계 값 구하기
	let boundaryIndex = getBoundaryIndex(arr, start, end); 
    //일반적인 quicksort와는 달리 경계값도 분할 된 리스트 중 한 범위에는 포함
	quickSort(arr, start, boundaryIndex - 1);
	quickSort(arr, boundaryIndex, end);

	return arr;
}
```
