function solution(n) {
    var answer = [];
    const arr = [4, 1, 2];
    
    while( n > 0 ) {
        const div = Math.floor( n / 3 );
        const rest = n % 3;
        
        if( !rest ) {
            answer.push(arr[rest]);
            n = div - 1;
            continue;
        }
        answer.push( arr[rest] );
        n = div;
    }
    
    return answer.reverse().join('');
}