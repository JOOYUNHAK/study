function solution(denum1, num1, denum2, num2) {
    var answer = [];

    if( num1 == num2 ) {
        answer = [denum1 + denum2, num2];
        if( Math.max(answer[0], answer[1]) % Math.min(answer[0], answer[1]) != 0 )
            return [answer[0], answer[1]];
        const divisor = getGCD(answer[0], answer[1]);
        return [answer[0] / divisor, answer[1] / divisor];
    }

    const [max, min] = [Math.max(num1, num2), Math.min(num1, num2)];

    if( max % min == 0 ) {
        const multiply = max / min;

        answer = [denum1 * multiply + denum2, max];
        if( Math.max(answer[0], answer[1]) % Math.min(answer[0], answer[1]) != 0 )
            return [answer[0], answer[1]];
        const divisor = getGCD(answer[0], answer[1]);
        return [answer[0] / divisor, answer[1] / divisor];
    }

    const gcd = getGCD( num1, num2 );

    if( gcd == 1 ) {
        answer = [denum1 * num2 + denum2 * num1, num1 * num2];
        const divisor = getGCD(answer[0], answer[1]);
        return [answer[0] / divisor, answer[1] / divisor];
    }

    for( let i = min * 2; ; i += min ) {
        if( max & i == 0 ) {
            const [multi1, multi2] = [i / min, i / max];
            answer = [denum1 * multi1, denum2 * multi2, min + i];
            const divisor = getGCD(answer[0], answer[1]);
            return [answer[0] / divisor, answer[1] / divisor];
        } 
    }
}

function getGCD( denum, num ) {
    if (num == 0)
        return denum;

    const [max, min] = [Math.max(denum, num), Math.min(denum, num)];

    return getGCD(min, max % min);
}