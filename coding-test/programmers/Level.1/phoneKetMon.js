function solution(nums) {

    let half = nums.length / 2;

    nums = [...new Set(nums)];

    if( nums.length >= half )
        return half;

    return nums.length;
}