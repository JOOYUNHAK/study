function solution(nums) {
    var answer = 0;

    for( let i = 0; i < nums.length - 2; i++ ) {
        for( let j = i + 1; j < nums.length - 1; j++ ) {
            for( let k = j+ 1; k < nums.length; k++) {
                const addNum = nums[i] + nums[j] + nums[k];
                const half = Math.floor(addNum / 2);
                for( let h = 2; h < half; h++ ) {
                    if( addNum % h == 0 )
                        break;
                    if( h == half - 1)
                        answer += 1;
                }
            }
        }
    }

    return answer;
}