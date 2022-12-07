function solution(n, m) {

    const gcd = n > m ? getGCD(n, m) : getGCD(m, n)

    return [gcd, n * m / gcd];
}

function getGCD(max, min) {

    let rest = max % min;

    if( rest == 0 )
        return min;

    return getGCD(min, rest);
}