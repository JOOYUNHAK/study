function solution(data, col, row_begin, row_end) {
    var answer = 0;

    const firstCompare = col - 1;
    data.sort((first, second) => {
        if( first[firstCompare] < second[firstCompare] ) return -1;
        if( first[firstCompare] > second[firstCompare] ) return 1;

        return second[0] - first[0];
    })

    const length = data[0].length;

    for( let i = row_begin; i <= row_end; i++ ) {
        let s = 0;
        for( let j = 0; j < length; j++ ) {
            s = s + data[i - 1][j] % i;
        }
        answer = s ^ answer;
    }    
    return answer;
}