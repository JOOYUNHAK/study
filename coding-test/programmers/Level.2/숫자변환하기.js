function solution(x, y, n) {
    var answer = 0;

    if( x == y ) return 0;

    const dp = Array.from({ length: y + 1}, () => Infinity ); 
    dp[x] = 0;

    for( let i = x; i <= y; i++ ) {
        if( i + n <= y ) {
            dp[i+n] = Math.min(dp[i] + 1, dp[i+n]);
        }
        if( i * 2 <= y ) {
            dp[i*2] = Math.min(dp[i] + 1, dp[i*2]);
        }
        if( i * 3 <= y ) {
            dp[i*3] = Math.min(dp[i] + 1, dp[i*3]);
        }
    }
    return dp[y] === Infinity ? -1 : dp[y];
}