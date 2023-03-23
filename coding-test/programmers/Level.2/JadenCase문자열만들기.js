function solution(s) {
    var answer = '';
    let isSpaced = true;

    for( let i = 0; i < s.length; i++ ) {
        if( s[i] === ' ' ) {
            isSpaced = true;
            answer += ' '
            continue;
        }

        if( isSpaced ) {
            isSpaced = false;
            if( s[i].match(/^\d/) ) {
                answer += s[i];
                continue;
            }
            answer += s[i].toUpperCase();
            continue;
        }
        answer += s[i].toLowerCase();
    }

    return answer;
}