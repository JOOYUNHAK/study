function solution(s) {
    var answer = 0;
    s = s.split('');
    const gual = { '(': 1, '{': 2, '[': 3, ')': 4, '}': 5, ']': 6 };
    let count = 1;

    while( count <= s.length ) {
        const stack = [];
        let i = 0;
        for( i; i < s.length; i++ ) {
            const current = s[i];
            if( gual[current] >= 4 ) {
                if( !stack.length ) break;
                const peek = stack[stack.length - 1];
                if( gual[current] - 3 == gual[peek] ) {
                    stack.pop();
                    continue;
                }
                break;
            }
            stack.push(current);
        }
        if( !stack.length && i == s.length ) answer++;
        s.push(s.shift())
        count++;
    }

    return answer;
}