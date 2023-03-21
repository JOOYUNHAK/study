function solution(s) {
    let zeroCount = 0, cycle = 0;

    while( s !== '1' ) {
        cycle++;
        s = s.replace(/0/g, () => {
            zeroCount++;
            return ''
        });
        s = s.length.toString(2).toString();
    }
    return [cycle, zeroCount];
}