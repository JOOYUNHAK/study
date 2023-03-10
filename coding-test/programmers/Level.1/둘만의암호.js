function solution(s, skip, index) {
    var answer = [];

    const originArr = [];
    const skipArr = [];
    const memo = [];

    for( let i = 0; i < s.length; i++ ) originArr.push(s[i].charCodeAt());
    for( let i = 0; i < skip.length; i++ ) skipArr.push(skip[i].charCodeAt());
    for( let i = 0; i < originArr.length; i++ ) {
        let charCode = originArr[i];
        if( !!memo[charCode] ) {
            answer.push(String.fromCharCode(memo[charCode]));
            continue;
        }
        let [copyIndex, originCode] = [index, charCode];
        for( let i = 1; i <= copyIndex; i++ ) {
            if( charCode == 122 ) charCode -= 26;
            charCode += 1;
            if( skipArr.indexOf(charCode) != -1 ) i--;
            memo[originCode] = charCode;
        }
        answer.push(String.fromCharCode(charCode));
    }
    return answer.join('');
}