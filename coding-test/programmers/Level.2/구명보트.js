function solution(people, limit) {
    var answer = 0;
    let front = 0;
    let last = people.length - 1;
    people.sort((a, b) => a - b);
    for( let i = 0; i < people.length; i++ ) {
        if( front == last ) return ++answer;
        if( last < front ) break;
        const [min, max] = [people[front], people[last]];
        if( min + max > limit ) {
            answer++;
            last -= 1;
            continue;
        }
        answer++;
        last -= 1;
        front += 1;
    }

    return answer;
}