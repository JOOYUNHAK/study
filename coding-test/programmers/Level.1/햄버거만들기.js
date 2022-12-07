function solution(ingredient) {
    var answer = 0;

    const stack = [];

    for( let i = 0; i < ingredient.length; i++ ) {

        const material = ingredient[i];

        stack.push(material);

        const stackLength = stack.length;

        if( i < 3 )
            continue;

        if( i == ingredient.length - 3 && !stack.length )
            break;

        if(
            stack[stackLength - 1] == 1 &&
            stack[stackLength - 2] == 3 &&
            stack[stackLength - 3] == 2 &&
            stack[stackLength - 4] == 1
        )
         {
            for(let i = 0; i < 4; i++ ) {
                stack.pop();
            }
            answer += 1;
        }
    }

    return answer;
}