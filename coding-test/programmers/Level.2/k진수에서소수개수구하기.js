function solution(n, k) {
    var answer = 0;
    
    const arr = n.toString(k).split('0').filter((num) => num !== '1' && num !== '' );
    
    for( let i = 0; i < arr.length; i++ ) {
        let isPrime = true;
        for( let j = 2; j <= Math.floor(Math.sqrt(+arr[i])); j++ ) {
            if( +arr[i] % j == 0 ) {
                isPrime = false;
                break;
            }
        }
        if( isPrime ) answer++
    }
    
    return answer;
}