function solution(book_time) {
    let answer = 0;
    const room = [];
    for( let i = 0; i < book_time.length; i++ ) {
        let [startTime, endTime] = book_time[i];
        [startTime, endTime] = convertToMinute(startTime, endTime);
        room[startTime] = room[startTime] === undefined ? 1 : room[startTime] + 1;
        room[endTime] = room[endTime] === undefined ? -1 : room[endTime] -1;
    }

    for( let i = 0; i < room.length; i++ ) {
        if( room[i] === undefined ) room[i] = 0;
        if( i == 0 ) continue;
        room[i] += room[i-1];
        answer = Math.max(room[i], answer);
    }
    return answer;
}

function convertToMinute(start, end) {
    const [startHour, startMin] = start.split(':');
    const [endHour, endMin] = end.split(':');
    return [(+startHour * 60) + +startMin, (+endHour * 60) + (+endMin + 10)];
}