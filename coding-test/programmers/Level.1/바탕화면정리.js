function solution(wallpaper) {
    let left, right, top, bottom = [0, 0, 0, 0];
    let first = true;

    for( let i = 0; i < wallpaper.length; i++ ) {
        for( let j = 0; j < wallpaper[i].length; j++ ) {
            if( wallpaper[i][j] === '#' ) {
                if( first ) {
                    [left, right, top, bottom] = [j, j+1, i, i+1];
                    first = false;
                }
                left = Math.min(left, j);
                right = Math.max(right, j+1);
                bottom = Math.max(bottom, i+1);
            }
        }
    }
    return [top, left, bottom, right];
}
