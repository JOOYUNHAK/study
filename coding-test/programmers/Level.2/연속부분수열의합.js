function solution(elements) {
    const num = new Set();
    
    const length = elements.length;
    for( let i = 1; i <= length; i++ ) {
        let sum = 0;
        for( let j = 0; j < length; j++ ) {
            if( j == 0 ) {
                for( let k = 0; k < i; k++ ) {
                    sum += elements[k];
                }
                num.add(sum);
                continue;
            }
            sum -= elements[j - 1];
            sum += elements[(j + i - 1) % length];
            num.add(sum);
        }
    }    
    return num.size;
}
