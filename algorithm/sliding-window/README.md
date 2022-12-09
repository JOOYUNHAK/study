# :panda_face: Sliding Window :panda_face:
### **배열**이나 **문자열**과 같은 일련의 데이터를 입력하거나 특정 방식으로 연속적인 해당 데이터의 하위 집합을 찾는 경우에 유용  

<br>

#### 문자열 안에서 고유 값 찾기, 연속된 숫자의 합이 가장 큰 값 찾는 문제들에서 큰 고민 없이 이중 for문을 썼었는데 해당 개념과 `다중 포인터`를 이용하면 O(N)으로 해결이 가능. 

<br>

**관련 문제**: 배열이 주어지고 N개의 연속적인 숫자를 더했을 때, 가장 합이 큰 수를 찾는 문제
```javascript
function findMaxSum(arr, N) {
    let maxSum = 0;

    // 가장 처음으로 찾게 되는 합을 maxSum으로 지정
    for( let i = 0; i < N; i++ ) {
        maxSum += arr[i];    
    }
    // 처음 찾은 가장 큰 합은 저장해두고
    // 가장 큰 합이 갱신될지를 비교하기 위해 temp에 저장
    let temp = maxSum;

    for(let i = N; i < arr.length; i++ ) {
        // 하나씩 index가 이동하면서 가장 처음 더했던 숫자를 뺴고
        // 마지막에 더한 index의 다음 index를 더한 값을 temp에 저장 후 비교
        temp = temp - arr[i - N] + arr[i];
        // temp가 더 크면 maxSum 갱신
        if( temp > maxSum )
            maxSum = temp;
    }
    return maxSum;
}
```