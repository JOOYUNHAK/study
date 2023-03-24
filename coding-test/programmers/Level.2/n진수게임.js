function solution(n, t, m, p) {
    var answer = '';
    const stack = [];
    
    let i = 0;
    let count = 1;
    while( true ) {
        if( !stack.length ) {
            const str = i.toString(n);
            for( let j = str.length - 1; j >= 0; j-- ) stack.push(str[j].toUpperCase());
            i++;
        }
        const popStr = stack.pop();
        if( p == count % m || (m == p && count % m == 0) ) {
            answer += popStr;
            t--;
            if( t == 0 ) break;
        }
        count++;
    }
    return answer;
}