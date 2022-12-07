function solution(a, b, n) {
    var answer = 0;

    let fullCoke = n;

    while( fullCoke >= a ) {
        const leaveCoke = fullCoke % a;
        const returnCoke = Math.floor( fullCoke / a ) * b;
        answer += returnCoke;
        fullCoke = returnCoke + leaveCoke;
    }

    return answer;
}