function solution(board) {
    
    board = board.join('');
    let oCount = 0, xCount = 0, xWin = false, oWin = false;
    const possible = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8],
    ];
    
    for( let i = 0; i < board.length; i++ ) {
        if( board[i] === 'O' ) oCount++;
        else if(board[i] === 'X') xCount++;
    }
    
    if( oCount < xCount || oCount > xCount + 1 ) return 0;
        
    for( const [a, b, c] of possible ) {
        if( board[a] === 'O' && board[b] === 'O' && board[c] === 'O') {
            oWin = true;
            break;
        }
    }
    
    for( const [a, b, c] of possible ) {
        if( board[a] === 'X' && board[b] === 'X' && board[c] === 'X') {
            xWin = true;
            break;
        }
    }
    
    if (oWin && xWin) return 0;
    if (oWin && oCount !== xCount + 1) return 0;
    if (xWin && oCount !== xCount ) return 0;
    
    return 1;
}