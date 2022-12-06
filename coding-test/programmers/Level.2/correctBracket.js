function solution(s){
    var answer = true;

    let open = 0;

    for( let i = 0; i < s.length; i++ ) {

        if( s[i] === '(' ) { 
            open += 1;
            continue;
        }

        open -= 1;

        if( open < 0 )
            return false;
    }

    if( open != 0 )
        return false;

    return answer;
}