function solution(X, Y) {

    var answer = '';

    const [xArr, yArr] = [new Array(10).fill(0), new Array(10).fill(0)];

    const reg = new RegExp('(0|1|2|3|4|5|6|7|8|9)', 'g');

    X.replace(reg, (match) => {
        xArr[Number(match)] = xArr[Number(match)] + 1;
    })

    Y.replace(reg, (match) => {
        yArr[Number(match)] = yArr[Number(match)] + 1;
    })

    for( let i = 9; i >= 0; i-- ) {
        answer = answer + String(i).repeat( Math.min(xArr[i], yArr[i] ));
    }   

    if( !answer.length )
        return '-1';

    if( answer[0] === '0' )
        return '0';

    return answer

}