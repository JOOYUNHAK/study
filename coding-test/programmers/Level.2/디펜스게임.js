function solution(n, k, enemy) {
    var answer = 0;

    if( k >= enemy.length )
        return enemy.length;

    return getRound(enemy, k, n);
}

function getRound( enemy, k, n) {
    let [left, right] = [0, enemy.length];

    while( left < right ) {
        let mid = Math.floor( (left + right) / 2 );
        if( isRoundPass(mid, enemy, k, n) ) {
            left = mid + 1;
            continue;
        }
        right = mid;
    }
    return left;
}

function isRoundPass(mid, enemy, k, n) {

    const copy = [...enemy].slice(0, mid + 1).sort((a, b) => a - b);
    let i = 0;
    while( copy.length ) {
        const roundEnemy = copy.pop();
        if( k > 0 ) {
            k -= 1;
            i += 1;
            continue;
        }
        if( n >= roundEnemy ) {
            n -= roundEnemy;
            i += 1;
            continue;
        }
        return false;
    }
    return true;
}