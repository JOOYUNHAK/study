function solution(n, words) {
    const obj = {};
    let cycle = 0, lastWord, i;
    for( i = 0; i < words.length; i++ ) {
        const current = words[i];
        if( i % n == 0 ) {
            cycle++;
            if( i == 0 ) {
                obj[current] = true;
                lastWord = current[current.length - 1];
                continue;
            }
        }
        if( obj[current] ) break; 
        if( current[0] !== lastWord ) break;
        lastWord = current[current.length - 1];
        obj[current] = true;
    }
    if( i == words.length ) return [0, 0];
    const person = i % n + 1;
    return [person, cycle];
}