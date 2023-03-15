function solution(w, h) {
    var answer = 1;
    const square = w * h;
    return square - ( w + h - getGcd(w, h) );
}

function getGcd(num1, num2) {
    const x = Math.floor(num1 / num2);
    const y = num1 % num2;
    if( y == 0 ) return num2;
    return getGcd(num2, y);
}