function solution(maps) {
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    const queue = [[0,0,1]];
    const row = maps.length;
    const col = maps[0].length
    maps[0][0] = 0;

    while( queue.length ) {
        let [x, y, dist] = queue.shift();

        if( x == row - 1 && y == col - 1 ) return dist;

        for( let i = 0; i < 4; i++ ) {
            let copyDist = dist;
            const [nx, ny] = [x + dx[i], y + dy[i]];
            if( nx < 0 || nx > row - 1 || ny < 0 || ny > col - 1 ) continue;
            if( maps[nx][ny] == 1 ) {
                queue.push([nx, ny, ++copyDist]);
                maps[nx][ny] = 0;
            }
        }
    }
    return -1;
}
