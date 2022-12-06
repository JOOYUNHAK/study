function solution(dots) {
    var answer = 0;

    let [x, y] = [[], []];

    for( let i = 0; i < dots.length; i++ ) {

        x.push(dots[i][0])
        y.push(dots[i][1]);

        if( i == dots.length - 1 ) {
            const [xMin, yMin] = [
                x[0] < x[1] ? x.shift() : x.pop(), 
                y[0] < y[1] ? y.shift() : y.pop()
            ];
            answer = Math.abs( xMin - x[0] ) * Math.abs( yMin - y[0] )
        }
    }
    return answer;
}