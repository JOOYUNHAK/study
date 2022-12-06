function solution(quiz) {
    var answer = [];

    for( let i = 0; i < quiz.length; i++ ) {
        const elements = quiz[i].split(' ');

        const [first, operator, second, result] = 
            [Number(elements[0]), elements[1], Number(elements[2]), Number(elements[4])];

        if( operator === '+') {
            if( first + second == result ) {
                answer.push('O');
                continue;
            }
            answer.push('X');
            continue;
        }

        if( first - second == result ) {
            answer.push('O');
            continue;
        }
        answer.push('X');
    }

    return answer;
}