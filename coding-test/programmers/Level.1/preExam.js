function solution(answers) {

	    let [one, two, three] = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];

	    let [oneCount, twoCount, threeCount] = [0,0,0];

	    for( let i = 0; i < answers.length; i++ ) {
		            const oneRemain = i % one.length;
		            const twoRemain = i % two.length;
		            const threeRemain = i % three.length;

		            if( answers[i] == one[oneRemain] )
			                oneCount += 1;
		            if( answers[i] == two[twoRemain] )
			                twoCount += 1;
		            if( answers[i] == three[threeRemain] )
			                threeCount += 1;
		        }

	    one = {
		            'index': 1,
		            'size': oneCount
		        }
	    two =  {
		            'index': 2,
		            'size': twoCount
		        }
	    three = {
		            'index': 3,
		            'size': threeCount
		        }

	    let result = [{...one}, {...two}, {...three}].sort((a, b) => b.size - a.size);

	    if( result[0].size > result[1].size )
		        return [result[0].index];
	    if( result[0].size == result[1].size) {
		            if( result[0].size == result[2].size) {
				                return [1,2,3];
				            }
		            return [result[0].index,result[1].index];
		        }
	    return []
}
