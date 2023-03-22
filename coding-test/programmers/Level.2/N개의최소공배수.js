function solution(arr) {
    var answer = 0;
    
    if( arr.length == 1 ) return arr[0];
    
    arr.sort((a, b) => a - b);
    
    let partAns = arr[0];
    
    for( let i = 1; i < arr.length; i++ ) {
        const current = arr[i];
        const gcd = getGCD(partAns, current);
        partAns = Math.floor(partAns * current / gcd);
    }
    
    return partAns;
}

function getGCD(min, max) {
    if( min == 0 ) return max;
    return getGCD(max % min, min);
}