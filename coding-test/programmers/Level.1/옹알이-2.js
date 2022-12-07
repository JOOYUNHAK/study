function solution(babbling) {
    var answer = 0;
    
    let preMatch = '';

    for ( let i = 0 ; i < babbling.length; i++ ) {
        let word = babbling[i];
        word = word.replace(/aya|ye|woo|ma/g, (match) => {
            if( preMatch === match ) {
                preMatch = ' ';
                return;
            }
            preMatch = match;
            return ''
        })
        if( !word.length )
            answer += 1;

        preMatch = '';
    }

    return answer;
}