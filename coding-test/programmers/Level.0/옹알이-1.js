function solution(babbling) {
    var answer = 0;

    let reg = new RegExp(/aya|ye|woo|ma/g)

    for( let i = 0; i< babbling.length; i++ ) {
        babbling[i] = babbling[i].replace(reg, (match) => {
            return ''
        })
    }

    for( let i = 0; i < babbling.length; i++ ) {
        if( !babbling[i].length )
            answer += 1;
    }
    return answer;
}