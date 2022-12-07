function solution(k, m, score) {
    var answer = 0;

    score.sort((a, b) => b - a);

    let eachBoxApple = m;

    const appleBox = [];

    if( m <= score.length ) {

    for( let i = 0; i < score.length; i++ ) {
        appleBox.push(
            score.slice(i, i + eachBoxApple)
        );

        if( i + eachBoxApple > score.length - eachBoxApple )
            break;

        i += eachBoxApple - 1
    }

    for( let i = 0; i < appleBox.length; i++ ) {
        answer += appleBox[i][eachBoxApple-1] * eachBoxApple
    }
    }


    return answer;
}