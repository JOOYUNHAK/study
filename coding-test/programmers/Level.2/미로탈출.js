function solution(maps) {
        
    let copyMaps = maps.map((str) => str.split(''));
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    const [row, col] = [copyMaps.length, copyMaps[0].length];
    let start, lever, end;
    for( let i = 0; i < copyMaps.length; i++ ) {
        for( let j = 0; j < copyMaps[i].length; j++ ) {
            if( copyMaps[i][j] === 'S' ) start = [i, j];
            else if( copyMaps[i][j] === 'L' ) lever = [i, j];
            else if( copyMaps[i][j] === 'E' ) end = [i, j];
        }
    }
    function bfs([x, y], [endX,endY]) {
        const queue = [[x, y]];
        let dist = 0;
        copyMaps[x][y] = 'X';
        while( queue.length ) {
            const qSize = queue.length;
            for( let i = 0; i < qSize; i++ ) {
            let [px, py] = queue.shift();
                for( let i = 0; i < 4; i++ ) {
                    const [nx, ny] = [px + dx[i], py + dy[i]];
                    if( nx > row -1 || nx < 0 || ny > col - 1 || ny < 0 || copyMaps[nx][ny] === 'X' ) continue;
                    if( nx === endX && ny === endY ) {
                        copyMaps[nx][ny] = 'X';
                        return ++dist;
                    }
                    queue.push([nx, ny]);
                    copyMaps[nx][ny] = 'X';
                }
            }    
            dist++;   
        }
    }    
    const leverDist = bfs(start, lever);
    if( !leverDist ) return -1;
    copyMaps = maps.map((str) => str.split(''));
    const endDist = bfs(lever, end);
    if( !endDist ) return -1
    return leverDist + endDist
}