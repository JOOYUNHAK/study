
function solution(sizes) {
	    var answer = 0;

	    const max = [];
	    const min = [];

	    sizes.map((a) => {
		            max.push(Math.max(a[0], a[1]));
		            min.push(Math.min(a[0], a[1]));
		        });

	    max.sort((a, b) => b - a)
	    min.sort((a, b) => b - a);

	    return max[0] * min[0];
}
