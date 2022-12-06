function solution(clothes) {
    var answer = 1;

    const map = new Map();

    for( let i = 0; i < clothes.length; i++ ) {
        const value = map.get(clothes[i][1]);
        if( !! value ) {
            map.set(clothes[i][1], [...value, clothes[i][0]])
            continue;
        }
        map.set(clothes[i][1], [clothes[i][0]]);
    }

    for( const kind of map ) {
        answer = answer * (kind[1].length + 1)
    }

    return answer - 1
}