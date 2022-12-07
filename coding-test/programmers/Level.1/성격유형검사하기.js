function solution(survey, choices) {
    var answer = '';

    const map = new Map();

    for( let i = 0; i < survey.length; i++ ) {
        let choice = choices[i];
        if( choice >= 4 ) {
            const existValue = map.get(survey[i][1]) || 0;
            map.set(
               survey[i][1], existValue + choice - 4
            );
            continue;
        }
        choice = 4 - choice;
        const existValue = map.get(survey[i][0]) || 0;
        map.set(
            survey[i][0], choice + existValue
        );
    };

    ( map.get('R') || 0 ) >= ( map.get('T') || 0 ) ? answer = answer + 'R' : answer = answer + 'T';
    ( map.get('C') || 0 ) >= ( map.get('F') || 0 ) ? answer = answer + 'C' : answer = answer + 'F';
    ( map.get('J') || 0 ) >= ( map.get('M') || 0 ) ? answer = answer + 'J' : answer = answer + 'M';
    ( map.get('A') || 0 ) >= ( map.get('N') || 0 ) ? answer = answer + 'A' : answer = answer + 'N';

    return answer;
}