# :bell: Big O 표기법 :bell:
입력된 내용이 늘어날 수록 알고리즘에 실행 시간이 어떻게 변하는지 설명하는 공식적인 방식, 연산의 횟수와의 관계를 따짐

### :balloon: **JavaScript**에서 `Object와` `Array`
`객체`는 접근, 제거, 삭제가 **O(1)** 로 상수시간이지만 탐색은 **O(N)** 
+ Object.keys(): O(N)
+ Object.values(): O(N)
+ Object.entries(): O(N)
+ Object.hasOwnProperty(): O(1) => Key값으로 접근해서 판단하므로 상수시간  

`배열`은 접근은 **O(1)**, 삽입과 삭제는 위치에 따라 다르다
#### `push`와 `pop`은 **O(1)** 을 따르지만 `shift`와 `unshift`가 O(N)인 이유는 인덱스의 재정렬 때문. sort의 **O(nlogn)** 을 제외하곤 대부분 **O(N)**