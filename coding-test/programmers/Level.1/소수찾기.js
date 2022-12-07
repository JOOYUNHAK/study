function solution(n) {

    let primeCount = 0;

    const arr = new Array(n+1).fill(true);
    for( let i = 2; i <= Math.floor(Math.sqrt(n)); i++ ) {
        if( !arr[i] )
            continue;
        for( let j = i * i; j <= n; j += i ) {
            arr[j] = false;
        }
    }
    for( let i = 2; i < arr.length; i++ ) {
        if( arr[i] )
            primeCount += 1;
    }
    return primeCount
}