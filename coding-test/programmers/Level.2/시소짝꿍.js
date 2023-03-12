function solution(weights) {
    var answer = 0;
        
    weights.sort((a, b) => a - b); // 오름차순 정렬
    const hash = {};
    
    for( let i = 0; i < weights.length; i++ ) {
        /* 해당 몸무게의 사람이 없으면 자신 1로 초기화, 있으면 한명 추가 */
        hash[weights[i]] = !hash[weights[i]] ? 1 : hash[weights[i]] + 1;
    }
    for( let i = 0; i < weights.length; i++ ) {
        // 몸무게 별 가능한 짝꿍 몸무게
        const [second, third, fourth] = [weights[i] * 2, weights[i] * 3 / 2, weights[i] * 4 / 3];
        /* 자신과 같은 몸무게의 사람 수 만큼 answer에 더하고 자신은 빠짐 */
        if( hash[weights[i]] >= 2 ) {
            const afterMinus = hash[weights[i]] - 1;
            answer += afterMinus;
            hash[weights[i]] = afterMinus;
        }
        // 그 외 비율
        if( hash[second] ) answer += hash[second];
        if( hash[third] ) answer += hash[third];
        if( hash[fourth] ) answer += hash[fourth]; 
    }
    return answer;
}