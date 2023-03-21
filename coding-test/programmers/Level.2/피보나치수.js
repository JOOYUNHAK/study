function solution(n) {
    const num = fitByArr(n);
    return num % 1234567n
}

function fitByArr(n) {
    const arr = [0, 1, 1];
    if( n <= 2 ) return 1;
    let fib = 0;
    for( let i = 3; i <= n; i++ ) {
        fib = BigInt(arr[i-1]) + BigInt(arr[i-2]);
        arr[i] = fib;
    }
    return fib
}