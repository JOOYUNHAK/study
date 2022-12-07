# :panda_face: 파이썬 기초 공부 :panda_face:

## :seedling: 파이썬 기초를 다지기 위해 간단히 정리해놓은 공부방
<br>

## :penguin: 연산자와 자료형
+ 연산자  
    `//`: '/'와는 다르게 나눗셈의 몫을 구해준다. (소수점 이하는 버림)  
    `**`: 거듭 제곱
+ 자료형  
    `bool`이 false가 되는 경우
    - ''와 같이 따움표 사이에 값이 없는 경우
    - 숫자 0
    - None이라는 '값이 없음'을 나타내는 키워드

## :pig2: 문자열 메소드  
+ `lower()`: 모든 문자 소문자  
+ `upper()`: 모든 문자 대문자
+ `capitalize()`: 첫 글자만 대문자
+ `title()`: 각 단어들의 첫 글자만 대문자
+ `swapcase()`: 대소문자를 뒤바꾸기
+ `count()`: 문자열 내에서 특정 단어의 횟수
+ `startswith()`: 특정 글자로 시작하는지 여부
+ `endswith()`: 특정 글자로 끝나는지 여부 
+ `strip()`: 문자열 앞뒤로 불필요한 문자 삭제( default는 빈 칸 )
+ `find()`: 특정 글자 찾기( 인덱스 반환 )  

## :tiger2: 문자열  포맷  
+ `{} + format`: 괄호 안에 변수 대입 가능
+ `{N} + format`: N은 숫자인데 괄호 안에 숫자를 지정해서 변수의 순서 지정 가능
+ `f-string`: print(f'문자열 {}, {}')의 형태로 괄호 안에 변수 바로 사용 가능  

## :cow2: List와 Tuple  
### 두 자료형의 가장 큰 차이점은 **수정 여부**, Tuple은 수정 이외에 List와 거의 동일하지만 할당은 할 수 있어도 복사는 불가능
+ `List`  
    `append()`: List 마지막에 값 추가  
    `remove()`: List 안에 인자로 주어진 값 삭제  
    `extend()`: 두 List 합치기  
    `copy()`: List 복사  
    `index()`: 어떤 값이 어디에 있는지 반환 ( Tuple도 가능 )  

+ `Tuple`  
    JavaScript의 **구조분해할당**과 같은 형식으로 **UnPacking**을 할 수 있음  
    ```python
    numbers = (1,2,3,4)
    (one, two, three, four) = numbers => 각 변수명에 순서대로 값이 담긴다.
    (one, two, *others) = numbers => 
    개수가 맞지 않는 경우 others에는 List 자료형태로 나머지가 들어감
    ```
## :dog2: Set  
+ `A.intersection(B)`: A, B Set간 공집합을 구할 때 사용 
+ `A.union(B)`: A, B Set간 합집합을 구할 때 사용
+ `A.differenct(B)`: A Set에서 B Set에 있는 값을 뺀 결과
+ `discard()`: 주어진 값 삭제( 해당 값이 없어도 에러 발생 x )
+ `isdisjoint()`: 두 세트에 겹치는 값이 있는지 여부
+ `issubset()`: 다른 세트의 부분집합인지 여부
+ `update`: 다른 세트의 값들을 더한다 ( 계산 x, 추가 )
+ `pop()`: 임의의 요소 하나 반환 이후 제거, **주의할 점**은 비어있을 때 pop()을 할 경우 오류를 낸다.











