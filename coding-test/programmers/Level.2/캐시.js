function solution(cacheSize, cities) {
    var answer = 0;
    if( !cacheSize ) return 5 * cities.length;
    const cache = [];
    for( let i = 0; i < cities.length; i++ ) {
        const city = cities[i].toLowerCase();
        
        const index = cache.indexOf(city);
        if( index == - 1 ) {
            if( cache.length < cacheSize ) cache.unshift(city);
            else {
                cache.pop();
                cache.unshift(city);
            }
            answer += 5;
            continue;
        }
        cache.splice(index, 1);
        cache.unshift(city);
        answer++;
    }
    return answer;
}