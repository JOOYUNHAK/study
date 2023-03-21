function solution(s)
{
    const stack = [];

    for( let i = s.length - 1; i >= 0; i--) {
        const str = s[i];
        if( stack.length && stack[stack.length - 1] === str ) {
            stack.pop();
            continue;
        }
        stack.push(str)
    }

    return stack.length ? 0 : 1;
}
