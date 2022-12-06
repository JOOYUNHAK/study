function solution(num, total) {
    var answer = [];

    const middle = Math.floor( total / num );

    answer.push(middle);

    let remainder = total % num;

    if( remainder == 0 ) {        

        num -= 1;

        const eachCount  = Math.floor( num / 2 );

        for( let i = 1; i <= eachCount; i++ ) {
            answer.unshift(middle - i);
            answer.push(middle + i);
        }
        return answer;   
    }

    let curTotal = middle;

    for( let i = 0; i < remainder; i++) {
        answer.push(middle + i + 1);
        curTotal += middle + i + 1;
    }

    let minus = 1;

    while( curTotal !== total ) {
        curTotal += middle - minus;
        answer.unshift(middle - minus);
        minus++;
    }

    return answer;
}