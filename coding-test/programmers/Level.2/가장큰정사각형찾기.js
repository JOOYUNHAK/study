function solution(board) {
    let answer = 0;
    
    if( board.length == 1 ) {
        if( board[0].indexOf(1) != -1 )
            return 1;
        return 0;
    }
    
    for( let i = 1; i < board.length; i++ ) {

        answer = Math.max(answer, board[i][0]);

        for( let j = 1; j < board[0].length; j++ ) {
            if( board[i][j] == 0 )
                continue;

            board[i][j] = ( Math.min(board[i][j-1], board[i-1][j-1], board[i-1][j]) ) + 1;
            answer = Math.max(answer, board[i][j]);
            
        }
    }
    return answer * answer;
}