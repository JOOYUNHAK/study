function solution(polynomial) {

    const reg = new RegExp(`(([0-9]{1}|[0-9]{1}[1-9]*)*x{1})|[0-9]+`, 'g');

    let xCount = 0;
    let numSum = 0;

    polynomial.replace(reg, (match) => {
        if( match[match.length - 1] === 'x') {
            if( match.length >= 2) {
                const addNum = match.slice( 0, match.length - 1 );
                xCount += Number(addNum);
                return;
            }
            xCount += 1;
            return;
        }
        numSum += Number(match);
    })

    if( xCount == 0 )
        return String(numSum)

    if( xCount == 1 ) {
        if( numSum != 0 )
            return 'x ' + '+ ' + numSum;
        return 'x';
    } 

    if( numSum != 0 )
        return xCount + 'x ' + '+ ' + numSum;

    return xCount + 'x'


}