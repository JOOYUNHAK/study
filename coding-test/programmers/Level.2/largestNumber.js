function solution(numbers) {
    
    numbers.sort((a, b) => (String(b) + String(a)) - (String(a) + String(b)))

    if( numbers[0] == '0' )
        return '0';

    return numbers.join('');

}