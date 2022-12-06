function solution(operations) {
    let queue = [];

    //최소 최대 index를 가리키고 있는 pointer
    let [front, end] = [-1, -1];

    for( let i = 0; i < operations.length; i++ ) {
        const [first, second] = operations[i].split(' ');
        //삽입
        if( first !== 'D' ) {
            //하나도 없으면
            if( !queue.length ) {
                queue.push(second);
                [front, end] = [0, 0];
                continue;
            }
            if( queue[front] > Number(second) ) {
                queue.unshift(second);
                end = queue.length - 1;
                continue;
            }
            if( queue[end] < Number(second) ) {
                queue.push(second);
                end = queue.length - 1;
                continue;
            }
            queue.push(second);
            queue.sort((a, b) => Number(a) - Number(b));
            end = queue.length - 1;
            continue;
        }
        //빈 큐를 삭제하라면
        if( !queue.length )
            continue;
        //최솟값 삭제
        if( second === '-1' ) {
            queue.shift();
            end -= 1;
            continue;
        }
        queue.pop();
        end -= 1;
    }
    if( !queue.length ) 
        return [0, 0];
    if( queue.length == 1 )
        return [Number(queue[front]), Number(queue[front])]
    return [Number(queue[end]), Number(queue[front])]

}