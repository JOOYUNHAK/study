function solution(citations) {
    var answer = 0;

    citations.sort((a, b) => b - a)

    if( citations[0] == 0 )
        return 0;

    for ( let i = 0; i < citations.length; i++ ) {
        if( i >= citations[i] )
            return i;
    }
    return citations.length;

}