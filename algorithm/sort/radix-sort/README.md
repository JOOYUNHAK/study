# :anguished: Radix Sort :anguished:
`기수정렬`은 낮은 자리수부터 비교하여 정렬을 해가는 정렬 알고리즘이며, 비교 연산을 하지 않아 속도가 빠르지만 기수 테이블의 크기만한 **메모리**가 더 필요함. 
비교방법에는 가장 작은 자리수부터 비교하는 **LSD**와 가장 큰 자리수부터 비교하는 **MSD**가 존재함  
시간복잡도는 `O(N+M)`으로 표현할 수 있고 N은 **정렬할 항목 수**이며 M은 **가장 큰 수의 자릿수**이다. ( 5개의 값이 있고, 최대 자릿수가 2면 2 * 10번 탐색 ) 

```javascript
/**
 * 인자로 주어진 숫자의 원하는 자릿수의 값을 반환하는 함수
 * @param num 값을 구하려는 수
 * @param i 자릿수의 위치( 0: 1의자리, 1: 10의 자리)
 * @returns 인자로 주어진 숫자의 해당 자릿수의 값
 */
function getDigits(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
/**
 * 인자로 주어진 숫자의 길이를 반환하는 함수
 * @param num 길이를 구하려는 숫자
 * @returns 인자로 주어진 숫자의 길이
 */
function digitCount(num) {
	if( num == 0 )
		return 1;
	// 0을 log10하면 오류가 나므로 0은 따로 처리
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function radixSort(arr) {
	
	// 가장 긴 숫자의 길이
	let mostdigits = 0;
	
	for( let i = 0; i < arr.length; i++ ) {
		const length = digitCount(arr[i]);
		mostdigits = Math.max(mostdigits, length);
	}
	
	for( let i = 0; i < mostdigits; i++ ) {
		//새로운 bucket 생성
		let buckets = Array.from({ length: 10 }, () => []);
		for( let j = 0; j < arr.length; j++ ) {
			let digit = getDigits(arr[j], i);
			// 현재 자릿수의 값에 따라 분류
			buckets[digit].push(arr[j]);
		}
		arr = [].concat(...buckets);
	}
	return arr;
}

```
