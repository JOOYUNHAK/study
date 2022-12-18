function solution(order) {
    let answer = 0;
    const stack = [];
    
    for( let i = 0; i < order.length; i++ ) {
        stack.push(i + 1);
        while( true ) {
            if( stack.length ) {
                if( stack[stack.length - 1] == order[answer] ) {
                    stack.pop();
                    answer += 1;
                    continue;
                }
            }
            break;
        }
    }
    return answer;
}