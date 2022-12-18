/**
 * x의 좌표만 알면 y의 좌표로 가능한 범위가 나오고 0도 포함되기에 +1
 */
function solution(k, d) {
    var answer = 0;
    
    const max = d*d;
    for( let i = 0; i <= d; i += k ) {
        const y = Math.floor(Math.sqrt(max - i*i));
        answer += Math.floor(y / k) + 1;
    }
    return answer;
}