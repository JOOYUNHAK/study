function solution(s) {
    var answer = 0;

    const array = s.split(' ');

    for( let i = array.length - 1; i >= 0; i-- ) {

        const pop = array[i];

        if( pop === 'Z' ) {

            let zCount = 1;

            while( true ) {
                if( array[i - 1] === 'Z' ) {
                    zCount += 1;
                    i--;
                    continue;
                }
                break;
            }
            i -= zCount
            continue;
        }

        answer += Number(pop);
    }

    return answer;
}