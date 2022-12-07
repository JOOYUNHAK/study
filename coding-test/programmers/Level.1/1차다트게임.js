function solution(dartResult) {
    var answer = 0;
    //총 3번의 기회
    // 각 점수 0 ~ 10
    // D => **, T => ***
    // * => 이전 점수 * 2, # => 이전 점수 -

    let nowScore = 0;
    let preScore = 0;
    let prepreScore = 0;

    dartResult = dartResult.split('');

    for( let i = 0; i < dartResult.length; i++ ) {
        let current = dartResult[i];

        if( !isNaN(current) ) {
            if( !isNaN(dartResult[i+1]) && i != dartResult.length - 1) {
                current = current + dartResult[i+1];
                i++;
            }
            preScore = nowScore;
            answer += Number(nowScore);
            nowScore = Number(current);
            continue;
        }

        switch( current ) {
            case 'S':
                break;
            case 'D':
                nowScore = Number(nowScore) * Number(nowScore);
                break;
            case 'T':
                nowScore = Number(nowScore) * Number(nowScore) * Number(nowScore);
                break;
            case '*':
                nowScore = Number(nowScore) * 2 + Number(preScore) * 2 - preScore - prepreScore;
                prepreScore = preScore;
                break;
            case '#':
                nowScore = Number(nowScore) * -1;
                break;
        }
        if( i == dartResult.length - 1 )
            answer += nowScore;
    }

    return answer;
}