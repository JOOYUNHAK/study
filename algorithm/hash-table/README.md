# :kissing: HashTable :kissing:

### Hash Table은 키-값 쌍을 저장하는데 사용되며 배열과는 다르게 키들이 순서대로 이루어져 있지 않음
### 이미 많은 프로그래밍 언어에 Hash Table 구조를 사용하여 내장되어 있으므로 실제로 코딩해서 사용하는 건 바람직 하지 않음
- **Python**: 딕셔너리
- **Javascript**: 객체나 맵
- **Java, Go, Scala**: 맵
- **Ruby**: 해시 
### Hash Table을 구현하기 위해 Hash 함수를 잘 구현해야 됨
> Hash 함수란? Key 값이 주어지면 배열에서 사용되는 유효한 인덱스로 바꿔주는데 사용되는 함수
### 좋은 Hash 함수는?
- 빨라야 한다
- 일관된 방식으로 분배를 해서 다른 것들과 겹치지 않아야 한다
    + 데이터가 많을 땐 어쩔수 없이 겹치게 되는데 해결법은?
        + `개별 체이닝(Separate Chaining)`: 같은 장소에 여러 데이터가 적재될 때 배열을 활용하여 이중 데이터 구조를 쓰는 것
        + `직선 탐색법(Linear Probing)`: 충돌이 발생하면 다음 빈 칸이 어딘지 확인해서 빈 곳에 저장하는 것 -> 배열의 크기가 정해져 있는 경우 **공간 부족**
- 특정 입력값을 입력할 때마다 **같은 출력값**이 나와야 한다

```javascript
class HashTable {
    constructor( size = 71 ) {
        this.map = new Array(size);
    }

    /**
     * key값이 주어지면 계산된 index를 반환해주는 함수
     * 충돌의 확률을 줄이기 위해 소수로 계산
     * 정해진 배열의 크기를 넘어가는 index를 반환하는 것을
     * 막기위해 해당 배열의 크기의 나머지를 index로 설정
     * @param key index를 얻을 Key 
     * @returns 해당 Key에 대응되는 key
     */
    hash(key) {
        let total = 0, PRIME = 31;
        // key값으로 주어지는 string의 길이가 길면 루프를 도는 횟수가 많아지므로
        // key의 길이가 100이 넘어가면 앞에 100글자로 hash 함수 실행
        for ( let i = 0; i < Math.min(key.length, 100); i++ ) { 
            const [char, value] = [key[i], char.charCodeAt(0) - 96];
            total = ( total * PRIME + value ) % this.map.length;
        }
        return total;    
    }
    
    /**
     * key-value가 주어지면 해당 key에 반환되는 index에 key-value 저장
     * 충돌이 날 경우엔 Seperate Chaining 방법 이용
     * @param key key-value 중 key
     * @param value key-value 중 value
     */
    set(key, value) {
        const index = this.hash(key);
        if( !this.map[index] ) {
            this.map[index] = []; // 해당 index에 아직 데이터가 없으면 빈 배열 생성
        }
        this.map[index].push([ key, value ]); // 이미 해당 index에 존재하면 중첩해서 저장
    }

    /**
     * 해당 key에 저장된 value값 반환하는 함수
     * 해당 key-value가 저장된 index에 값이 있다면
     * Separate Chaining 방식으로 구현되었으므로 중첩되어 있는 길이만큼 검사
     * @param key 찾을 key 
     * @returns 해당 key에 저장된 value, 없을 경우 null
     */
    get(key) {
        const index = this.hash(key);
        if ( this.map[index] ) {
            for( let i = 0; i < this.map[index].length; i++ ) {
                if( this.map[index][i][0] === key ) {
                    return this.map[index][i][1];
                }
            }
        }
        return null;
    }

    /**
     * Hash Table에 저장된 모든 Key 값을 반환하는 함수(중복 x)
     * @returns Hash Table에 저장된 모든 Key 값
     */
    keys() {
        const keyArr = [];
        for( let i = 0; i < this.map.length; i++ ) {
            if( this.map[i] ) {
                /* 동일한 index에 저장되어 있는 key */
                for( let j = 0; j < this.map[i].length; j++ ) {
                    /* 동일한 index에 중복된 key 값이 있다면 한번만 출력 */
                    if( !keyArr.includes(this.map[i][j][0]) ) {
                        keyArr.push(this.map[i][j][0]);
                    }
                }
            }
        }
        return keyArr;
    }
    /**
     * Hash Table에 저장된 모든 Value 값을 반환하는 함수(중복 x)
     * @returns Hash Table에 저장된 모든 Value
     */
    values() {
        const valueArr = [];
        for( let i = 0; i < this.map.length; i++ ) {
            if( this.map[i] ) {
                for( let j = 0; j < this.map[i].length; j++ ) {
                    if( !valueArr.includes(this.map[i][j][1]) ) {
                        valueArr.push(this.map[i][j][1]);
                    }
                }
            }
        }
        return valueArr;
    }
}
```