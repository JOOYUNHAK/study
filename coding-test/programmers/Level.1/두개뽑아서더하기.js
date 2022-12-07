function solution(numbers) {

    const set = new Set();

    numbers.sort((a, b) => a - b);

    if( numbers.length == 2)
        return [numbers[0] + numbers[1]]

    for( let i = 0; i < numbers.length; i++ ) {
        for( let j = i + 1; j < numbers.length; j++) {
            set.add(numbers[i] + numbers[j])
        }
    }

    return [...set].sort((a, b) => a -b );
}
