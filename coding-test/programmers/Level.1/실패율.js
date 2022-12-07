function solution(N, stages) {

    let answer = [];

    stages.sort((a, b) => a - b );

    for( let i = 0; i < N; i++ ) {
        const stage = i + 1;

        let challenger = stages.length;

        let failUser = 0;

        while ( true ) {

            if( stage == stages[0] ) {
                stages.shift();
                failUser += 1;
                continue;
            }

            break;
        }

        const failValue = failUser / challenger;

        failValue === Infinity ? answer.push(0) : answer.push({ stage, failValue })
    }

    answer.sort((a, b) => b.failValue - a.failValue )    
    const result = [];
    answer.map((info) => result.push(info.stage))
    return result;
}