function solution(numbers) {
    var answer = [];
    const stack = [];

    for( let i = 0; i < numbers.length; i++ ) {
        while( 
            stack.length && 
            numbers[i] > numbers[stack[stack.length - 1]]
        ) {
            answer[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }

    for( let i = 0; i < numbers.length; i++ ) {
        if( !answer[i] ) answer[i] = -1;
    }

    return answer;
}