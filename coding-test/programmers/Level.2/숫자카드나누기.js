function solution(arrayA, arrayB) {
    var answer = 0;

    const chulMin = arrayA.sort((a, b) => a - b)[0];
    const youngMin = arrayB.sort((a, b) => a - b)[0];

    let chulGcd = [];
    let youngGcd = [];

    for( let i = 2; i <= chulMin; i++ ) {
        if( chulMin % i == 0 ) {
            for( let a = 0; a < arrayA.length; a++ ) {
                if( arrayA[a] % i != 0)
                    break;
                if( a == arrayA.length - 1 )
                    chulGcd.push(i);
            }
        }
    }

    if( chulGcd.length) {
        for( let a = chulGcd.length -1 ; a >= 0; a -- ) {
            let test = true;
            for( let i = 0; i < arrayB.length; i++ ) {
                if( arrayB[i] % chulGcd[a] == 0 ) {
                    test = false;
                    break;
                }
            }
            if( test ) {
                answer = chulGcd[a];
                break;
            }
        }
    }

    for( let i = 2; i <= youngMin; i++ ) {
        if( youngMin % i == 0 ) {
            for( let a = 0; a < arrayB.length; a++ ) {
                if( arrayB[a] % i != 0)
                    break;
                if( a == arrayB.length - 1 )
                    youngGcd.push(i);
            }
        }
    }

    if( youngGcd.length) {
        for( let a = youngGcd.length -1 ; a >= 0; a -- ) {
            let test = true;
            for( let i = 0; i < arrayA.length; i++ ) {
                if( arrayA[i] % youngGcd[a] == 0 ) {
                    test = false;
                    break;
                }
            }
            if( test ) {
                answer = Math.max(answer, youngGcd[a]);
                break;
            }
        }
    }

    return answer;
}