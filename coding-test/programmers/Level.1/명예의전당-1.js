function solution(k, score) {
    var answer = [];

    const minArr = [];

    for( let i = 0; i < score.length; i++ ) {        
        const nowValue = score[i];

        if( i < k ) {
            if( i == 0 ) {
                minArr.push(nowValue);
                answer.push(nowValue);
                continue;
            }
            minArr.push(nowValue);
            minArr.sort((a, b) => b - a);
            answer.push(minArr[minArr.length - 1]);
            continue;
        }

        const length = minArr.length - 1;

        if( minArr[length] < nowValue ) {
            minArr.pop();
            minArr.push(nowValue);
            minArr.sort((a, b) => b - a);
            answer.push(minArr[length]);
            continue;
        }

        answer.push(minArr[length]);
    } 

    return answer;
}