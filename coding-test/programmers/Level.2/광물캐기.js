function solution(picks, minerals) {
    var answer = 0;
    let pickSum = picks.reduce((acc,cur) => acc + cur);
    const [group, stageScore] = [[], []];
    
    let count = 0;
    while( true ) {
        if( count % 5 == 0 ) {
            group.push( minerals.slice(count, count + 5) );
            if( count + 5 >= minerals.length )  break;
        }
        count++;
    }
 
    for( let i = 0; i < group.length; i++ ) {
        let count = { dia: 0, iron: 0, stone:0 };
        if( i == pickSum ) break;
        for( let j = 0; j < group[i].length; j++ ) {
            const mineral = group[i][j];
            if( mineral === 'diamond' ) count.dia++;
            else if( mineral === 'iron' ) count.iron++;
            else count.stone++;
        }
        stageScore.push([
            count.dia * 1 + count.iron * 1 + count.stone * 1,
            count.dia * 5 + count.iron * 1 + count.stone * 1,
            count.dia * 25 + count.iron * 5 + count.stone * 1
        ]);
    }
    stageScore.sort((s1, s2) => s2[2] - s1[2]).map((stage) => {
        if( picks[0] ) {
            picks[0]--;
            answer += stage[0];
        } else if( picks[1] ) {
            picks[1]--;
            answer += stage[1];
        } else {
            picks[2]--;
            answer += stage[2];
        }
    });

    return answer;
}