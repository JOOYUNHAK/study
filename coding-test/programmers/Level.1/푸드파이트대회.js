function solution(food) {
    var answer = '';
    
    let left = '';
    
    for( let i = 1; i < food.length; i++ ) {
                
        const eachFoodCount = Math.floor( food[i] / 2 );
        
        left += String(i).repeat(eachFoodCount);
    }
    
    answer = left + '0' + left.split('').reverse().join('')
    
    return answer;
}