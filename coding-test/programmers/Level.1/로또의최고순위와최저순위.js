function solution(lottos, win_nums) {
    var answer = [];

    const score = [6, 6, 5, 4, 3, 2, 1];

    const allArr = [...lottos, ...win_nums].sort((a, b) => Number(a) - Number(b));

    let zeroCount = 0;
    let winCount = 0;

    for( let i = 0; i < allArr.length; i++ ) {
        if( allArr[i] == 0 ) {
            zeroCount++;
            continue;
        }
        if( i < allArr.length - 1 ) {
            if( allArr[i] == allArr[i+1] ) {
                winCount++;
                i++;
            }
        }
    }
    answer.push(
        score[winCount + zeroCount]
    );
    answer.push(
        score[winCount]
    )

    return answer;
}