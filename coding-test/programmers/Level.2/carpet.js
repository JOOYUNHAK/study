function solution(brown, yellow) {

    const partener = []

    const squareSize = brown + yellow;

    for( let i = 1; i <= squareSize; i++ ) {
        if( squareSize % i == 0 ) {
            const quotient = squareSize / i;
            if( (quotient + i) * 2 - 4 == brown )
                return [quotient, i]
        }
    }
}
