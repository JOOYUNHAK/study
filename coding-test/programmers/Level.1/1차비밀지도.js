function solution(n, arr1, arr2) {
    var answer = [];

    for( let i = 0; i < arr1.length; i++ ) {

        let bitResult = Number(arr1[i]|arr2[i]).toString(2);

        const lengthDif = n - bitResult.length;

        if( lengthDif ) 
            bitResult = '0'.repeat(lengthDif) + bitResult;

        bitResult = bitResult.replace(/1|0/g, (num) => {
            if( num == 1 )
                return '#'
            return ' '
        })
        answer.push(bitResult)
    }
    return answer;
}