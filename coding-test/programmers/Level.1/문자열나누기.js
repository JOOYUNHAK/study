function solution(s) {
    var answer = 0;

    const arr = [];

    let [xNum, others] = [0, 0];

    for( let i = 0; i < s.length; i++ ) {
        const nowChar = s[i];
        if( !arr.length ) {
            arr.push(nowChar);
            xNum += 1;
            continue;
        }

        arr[0] === nowChar ? xNum += 1 : others += 1

        if( xNum == others ) {
            arr.pop();
            answer += 1;
            xNum = 0; others = 0;
        }
    }

    if( arr.length )
        answer += 1;

    return answer;
}