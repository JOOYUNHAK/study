function solution(skill, skill_trees) {
    var answer = 0;

    const skillArr = skill.split('');

    for( let i = 0; i < skill_trees.length; i++ ) {
        let isPossible = true;
        let preIndex = -1;
        for( let j = 0; j < skill_trees[i].length; j++ ) {
            const currentSkill = skill_trees[i][j];
            if( skillArr.includes(currentSkill) ) {
                const index = skillArr.indexOf(currentSkill);
                if( index != preIndex + 1 ) {
                    isPossible = false;
                    break;
                }
                preIndex = index;
            }
        }
        if( isPossible ) answer++;
    }
    return answer;
}