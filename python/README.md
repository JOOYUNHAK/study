# :panda_face: 파이썬 기초 공부 :panda_face:

## :seedling: 파이썬 기초를 다지기 위해 간단히 정리해놓은 공부방

### :penguin: 연산자와 자료형
+ 연산자  
    `//`: '/'와는 다르게 나눗셈의 몫을 구해준다. (소수점 이하는 버림)  
    `**`: 거듭 제곱
+ 자료형  
    `bool`이 false가 되는 경우
    - ''와 같이 따움표 사이에 값이 없는 경우
    - 숫자 0
    - None이라는 '값이 없음'을 나타내는 키워드

### :pig2: 문자열 메소드  
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

### :tiger2: 문자열  포맷  
+ `{} + format`: 괄호 안에 변수 대입 가능
+ `{N} + format`: N은 숫자인데 괄호 안에 숫자를 지정해서 변수의 순서 지정 가능
+ `f-string`: print(f'문자열 {}, {}')의 형태로 괄호 안에 변수 바로 사용 가능  

### :cow2: List와 Tuple  
#### 두 자료형의 가장 큰 차이점은 **수정 여부**, Tuple은 수정 이외에 List와 거의 동일하지만 할당은 할 수 있어도 복사는 불가능
+ List
  - `append()`: List 마지막에 값 추가
  - `remove()`: List 안에 인자로 주어진 값 삭제
  - `extend()`: 두 List 합치기
  - `copy()`: List 복사
  - `index()`: 어떤 값이 어디에 있는지 반환 ( Tuple도 가능 )  

+ Tuple  
    JavaScript의 **구조분해할당**과 같은 형식으로 **UnPacking**을 할 수 있음  
    ```python
    numbers = (1,2,3,4)
    (one, two, three, four) = numbers => 각 변수명에 순서대로 값이 담긴다.
    (one, two, *others) = numbers => 
    개수가 맞지 않는 경우 others에는 List 자료형태로 나머지가 들어감
    ```
### :dog2: Set  
+ `A.intersection(B)`: A, B Set간 공집합을 구할 때 사용 
+ `A.union(B)`: A, B Set간 합집합을 구할 때 사용
+ `A.differenct(B)`: A Set에서 B Set에 있는 값을 뺀 결과
+ `discard()`: 주어진 값 삭제( 해당 값이 없어도 에러 발생 x )
+ `isdisjoint()`: 두 세트에 겹치는 값이 있는지 여부
+ `issubset()`: 다른 세트의 부분집합인지 여부
+ `update`: 다른 세트의 값들을 더한다 ( 계산 x, 추가 )
+ `pop()`: 임의의 요소 하나 반환 이후 제거, **주의할 점**은 비어있을 때 pop()을 할 경우 오류를 낸다.

### :bear: for문
#### 반복 범위: `range([start], end, [step])` start ~ end - 1까지 step만큼 건너띄면서 반복 ( start, step은 Option )
#### 반복 대상: `List` `Tuple` `Dictionary` `문자열`이 올 수 있으며 `Dictionary`같은 경우 items 메소드를 활용하여 `Key`, `Value`를 전부 받을 수 있다.

### :boar: List Comprehension
#### `[변수 활용 for 변수 in 반복대상 if 조건]`: 변수 활용에 `변수 + 1` `변수 + 문자열`등 반복 대상을 변경해 줄 수 있음

### :monkey_face: 함수
+ `키워드`: 함수에 **default** 값이 여러개로 설정 되어 있을 때, 특정 **default** 값만 변경하여 함수를 호출하고 싶으면, 해당 `키워드` 값 변경해서 전달
+ `가변인자`: `*`를 이용하여 인자를 받으면 호출하는 쪽의 인자가 일정하지 않아도 됨

### :elephant: 파일 입출력
+ `with`: 파일을 열 때 `with`와 함께 사용하면 `close()`를 호출하지 않아도 자동으로 파일을 닫아준다.  
    **사용법**: `with open('파일명', flag, encoding) as 연 파일 이름을 담을 변수명:`
### :honeybee: 클래스
+ `isinstance(객체, 클래스)`: 주어진 객체가 클래스로부터 만들어진 객체가 맞는지 여부
+ `__init__`: 일종의 생성자 개념 self는 this와 같은 뜻인 것 같다. 
```python
class 클래스명(부모클래스): # 부모클래스를 상속 받기도 가능
    def __init__(self, 변수): #self에 객체를 넘기는 것도 가능하다
        super().__init__() #상속을 받으며 부모클래스의 init 호출
        self.변수 = 값
```
### :ant: 예외처리
try문은 except문이나 finally문과 짝을 이뤄 수행 되어야 함.
```python
try:
    #수행 문장
except:
    #에러 처리 Error Type으로 여러개의 except 처리 가능
else:
    #정상 수행 동작
finally:
    #무조건 실행할 동작
```

### :hatching_chick: 모듈과 패키지
+ `모듈`: 하나의 파이썬 파일  
모듈 import 하는 방법: **import 모듈**, **from 모듈 import 변수, 함수 또는 클래스**
+ `패키지`: 모듈이 여러개 모인 것
패키지 가져오는 방법: **import 패키지.모듈**, **from 패키지 import 모듈**














