function solution(storey) {
    var answer = 0;
    
    let str_storey = String(storey).split('');
    
    for( let i = str_storey.length - 1; i >= 0; i-- ) {
        const num = +str_storey[i];
        if( num < 5 ) answer += num;
        else if( num > 5 ) {
            answer += 10 - num;
            str_storey[i-1]++;
            if( i == 0 ) {
                answer++;
                continue;
            }
        } 
        else {
            if( i - 1 >= 0 ) {
                const preNum = +str_storey[i - 1];
                if( preNum >= 5 ) {
                    answer += 5;
                    str_storey[i - 1] = preNum + 1;
                } else answer += num;
            } else answer += num;
        }
    }
    
    return answer;
}