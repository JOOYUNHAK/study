function solution(board) {

    const positionArr = board.join(',').split(',');

    const n = board.length;

    const dangerousArea = new Set();

    const length = positionArr.length;

    for( let i = 0; i < length; i++ ) {
        if( positionArr[i] == 1 ) {

            dangerousArea.add(i);
            const right = Math.floor( (i + 1 ) % n );
            const left = i / n;

            if( i + 1 < length && right )
                dangerousArea.add(i + 1);
            if( i - 1 >= 0 && left  ) 
                dangerousArea.add(i - 1);
            if( i + n < length )
                dangerousArea.add(i + n)
            if( i - n >= 0 )
                dangerousArea.add(i - n);
            if( i + n - 1 < length && left )
                dangerousArea.add(i + n - 1);
            if( i - n - 1 >= 0 && left )
                dangerousArea.add(i - n - 1);
            if( i + n + 1 < length && right )
                dangerousArea.add(i + n + 1);
            if( i - n + 1 >= 0 && right)
                dangerousArea.add(i - n + 1);
        }
    }

    return length - dangerousArea.size;
}