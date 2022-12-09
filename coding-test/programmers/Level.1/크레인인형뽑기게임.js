function solution(board, moves) {
    var answer = [];
    let count = 0;
    
    moves.reverse();
    
    while( true ) {
        const position = moves.pop();
        if( !position )
            return count;
        for( let i = 0; i < board.length; i++ ) {
            if( board[i][position - 1] ) {
                answer.push(board[i][position - 1]);
                board[i][position - 1] = 0;
                if( answer.length >= 2 ) {
                    if( answer[answer.length - 1] == answer[answer.length -2] ) {
                        answer = answer.slice(0, -2)
                        count += 2;
                        break;
                    }
                }
                break;
            }    
        }
    }
}