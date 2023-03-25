function solution(record) {
    var answer = [];

    const uidMap = new Map();

    for( let i = 0; i < record.length; i++ ) {
        const [state, uid, nickName] = record[i].split(' ');
        if( state === 'Enter' || state === 'Change' ) uidMap.set(uid, nickName);
    }

    for( let i = 0; i < record.length; i++ ) {
        const [state, uid] = record[i].split(' ');
        const nickName = uidMap.get(uid);
        if( state === 'Enter' ) answer.push(`${nickName}님이 들어왔습니다.`);
        else if( state === 'Leave' ) answer.push(`${nickName}님이 나갔습니다.`);
    }

    return answer;
}