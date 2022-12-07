function solution(number, limit, power) {
    var answer = 0;

    let knight = [];

    for ( let i = 1; i <= number; i++ ) {
        if( i  == 1 ) {
            knight.push(1)
            continue;
        }
        let count = 1;

        for( let j = 2; j <= i; j++ ) {
            if( i % j == 0) {
                if( i / j == j ) {
                    count = count * 2 + 1;
                    break;
                } 
                if( i / j < j ) {
                    count *= 2;
                    break;
                }
                count += 1;
            }            
        }
        knight.push(count);
    }

    for (let i = 0; i < knight.length; i++ ) {
        if( knight[i] > limit ) {
            answer += power;
            continue;
        }
        answer += knight[i];
    }

    return answer;
}