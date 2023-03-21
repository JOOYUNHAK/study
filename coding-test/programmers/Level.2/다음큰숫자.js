function solution(n) {
    var answer = 0;
    const length = n.toString(2).match(/1/g).length;

    while( true ) {
        n += 1;
        const nextLength = n.toString(2).match(/1/g).length;
        if( length == nextLength ) return n;
    }
}