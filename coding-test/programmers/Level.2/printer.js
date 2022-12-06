function solution(priorities, location) {

    let count = 1;

    const stack = priorities.map((p, i) => [p, i]);

    const rank = [...stack].sort((a, b) => b[0] - a[0]);

    while( true ) {
        const front = stack.shift();
        const rankFirst = rank.shift();

        if( front[0] < rankFirst[0] ) {
            stack.push(front);
            rank.unshift(rankFirst);
            continue;
        }

        if( front[1] == location )
            return count;

        count += 1;
    }
}