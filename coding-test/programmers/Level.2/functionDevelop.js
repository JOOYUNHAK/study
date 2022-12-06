function solution(progresses, speeds) {
    var answer = [];

    let [time, count] = [0, 0];

    for( let i = 0; i < progresses.length; i++ ) {

        if( i == 0 ) {
            time = Math.ceil(( 100 - progresses[i] ) / speeds[i]);
            count += 1;
            continue;
        }

        const nextProgressesTime = Math.ceil(( 100 - progresses[i] ) / speeds[i]);

        if( time * speeds[i] + progresses[i] >= 100 ) {
            count += 1;
            continue;
        }

        answer.push(count);

        time = nextProgressesTime;

        count = 1;

    }

    answer.push(count)

    return answer;
}