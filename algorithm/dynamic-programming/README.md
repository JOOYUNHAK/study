# :question: Dynamic Programming :question:

### 동적 프로그래밍은 복잡한 문제를 더 간단한 하위 문제의 모음으로 쪼개서 각 하위 문제들을 풀어서 그 답을 저장하는 방식으로 문제를 푸는 알고리즘

### 하나의 문제를 더 작은 문제로 나눌 수 있고, 그 중 일부는 재활용이 가능한 **반복되는 하위 문제**들이 존재하는가, 하위 문제의 해답으로 상위 문제를 해결할 수 있는 **최적 부분 구조**를 가지고 있는가를 만족해야만 `동적 프로그래밍`을 수행할 수 있다.

<br>

### 하지만 **피보나치 수**를 예로 들면 이 문제를 기본 `동적프로그래밍`으로 해결하면 `O(2^n)`이라는 큰 시간 복잡도를 가짐

<br>

### 이 문 제를 해결하기 위해 분할된 특정 문제에 대한 결과값을 저장하고, 이후에 그 결과값을 재사용 함으로써 `O(N)`이라는 시간복잡도로 개선할 수 있음.

- `Memozation`: 하위 문제에 대해 찾은 결과값을 저장할 수 있는 구조를 사용해서 다음번에는 모든 작업을 하지 않고 그냥 데이터 구조를 보는 **Top-Down** 방식
- `Tabulation`: **Bottom-Up** 방식으로 루프를 돌면서 수행되기 때문에 **공간제약**을 훨씬 덜 받는다.

```javascript
function fibByMemo(n, memo = [0, 1, 1]) {
    if( n <= 2 ) return 1;
    /* 상위 문제의 값을 구하기 위해 하위 문제들의 값을 구함 */
    const res = fibByMemo(n-1, memo) + fibByMemo(n-2, memo);
    memo[n] = res;
    return res;
}

function fibByTabul(n) {
    const arr = [0, 1, 1];
    let fib = 0;
    if( n <= 2 ) return 1;
    /* 상위 문제들의 값은 구해 놓은 하위 문제들의 값을 사용  */ 
    for( let i = 3; i <= n; i++ ) {
        fib = arr[i-1] + arr[i-2];
        arr[i] = fib;
    }
    return fib;
}
```

