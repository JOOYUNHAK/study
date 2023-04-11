function solution(sequence, k) {
    var answer = [];

    const arr = [];
    let length = Infinity, sum = 0, left = 0, right = 0; 

    while(true) {
        if( right == sequence.length && left == right ) break;
        if( sum < k ) {
            if( right < sequence.length ) {
                sum += sequence[right];
                right++;
            } else if ( left < right ) {
                sum -= sequence[left];
                left++;
            }
            continue;
        }
        if( sum == k ) {
            const len = right - left - 1;
            if( len < length ) {
                arr[0] = left;
                arr[1] = right - 1;
                length = len;
                continue;
            }
        }
        sum -= sequence[left];
        left++;
    }

    return arr;
}
