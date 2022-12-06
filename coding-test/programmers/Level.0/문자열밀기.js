function solution(A, B) {

    var answer = -1;

    if( A === B )
        return 0

    for( let i = 1; i < A.length; i++ ) {

        const sliceStr = A.slice(-i);

        const remainStr = A.slice(0, A.length - i);

        if( sliceStr + remainStr === B )
            answer = i;
    }

    return answer;
}