function solution(n) { 
    let one = 1, two = 2, three;
    for( let i = 2; i < n; i++ ) {
        three = (one + two) % 1000000007;
        one = two;
        two = three;
    };
    return three
}