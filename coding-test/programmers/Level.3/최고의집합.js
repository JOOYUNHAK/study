function solution(n, s) {
    let [mod, div] = [s % n, Math.floor(s / n)];

    if(s < n ) return [-1];

    const answer = new Array(n).fill(div);

    let index = n - 1;
    while( mod ) {
        if( index == -1 ) index = n - 1;
        answer[index]++;
        mod--;
        index--;
    }
    return answer;
}