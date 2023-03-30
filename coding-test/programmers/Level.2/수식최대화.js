function solution(expression) {

    const arr = expression.match(/\d+|[\-\+\*]/g);
    const per = makePer(['*', '-', '+'], 3);

    let max = 0;
    for( let i = 0; i < per.length; i++ ) {
        const prior = per[i];
        let copyArr = [...arr];
        const stack = [];

        for( let j = 0; j < copyArr.length; j++ ) {
            while( true ) {
                const index = copyArr.indexOf(prior[j]);
                if( index == -1 ) break;

                const result = calc(copyArr[index - 1], prior[j], copyArr[index + 1]);         
                copyArr[index+1] = result;
                copyArr.splice(index - 1 , 2);
            }
        }
        max = Math.max(max, Math.abs(copyArr[0]))
    }
    return max;
}

function makePer(arr, selectNum) {
    const result = [];

    if( selectNum == 1 ) return arr.map((str) => [str]);

    arr.forEach((fix, index, origin) => {
        const sliceArr = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const getPer = makePer(sliceArr, selectNum - 1);
        const concatArr = getPer.map((arr) => [fix, ...arr]);
        result.push(...concatArr);
    })
    return result;
}

function calc(first, char, second) {
    switch( char ) {
        case '*':
            return +first * +second;
        case '-':
            return +first - +second;
        case '+':
            return +first + +second;
    }
}