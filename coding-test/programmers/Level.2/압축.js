function solution(msg) {
    var answer = [];
    
    const dic = {};
    
    let count = 1;
    
    for( let i = 65; i <= 90; i++ ) {
        const char = String.fromCharCode(i);
        dic[char] = count;
        count++;
    }
    
    let lastIndex = 26;
    for( let i = 0; i < msg.length; i++ ) {
        let og = msg[i];
        
        let pre;
        while( dic[og] ) {
            pre = og;
            i++;
            og += msg[i];
        }
        lastIndex += 1;
        dic[og] = lastIndex;
        i--;
        answer.push(dic[pre]);
    }
    return answer;
}