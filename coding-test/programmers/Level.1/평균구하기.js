function solution(arr) {
    var answer = 0;

    for( const num of arr ) {
        answer += num
    }

    return answer / arr.length;
}