function solution(id_pw, db) {
    var answer = '';

    db.map((info) => {
        if( info[0] === id_pw[0] ) {
            if( info[1] === id_pw[1] ) {
                answer = 'login'
                return;  
            }
            answer = 'wrong pw';
            return;
        }
    })

    answer = !answer ? 'fail' : answer

    return answer;
}