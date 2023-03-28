function solution(p) {
    var answer = '';

    if( p === '' || isRightStr(p) ) return p;
    return splitUV(p);
}

function splitUV(origin) {

    if( origin === '' ) return origin;

    let openCount = 0, closeCount = 0, index = 0, u, v;


    for( const str of origin ) {
        index++;
        str === '(' ? openCount++ : closeCount++;
        if( openCount == closeCount && openCount ) {
            [u, v] = [ origin.substring(0, index), origin.substring(index) ];
            break;
        }
    }

    let answer = '';

    while( true ) {
        if( isRightStr(u) ) {
            answer += u;
            if( v === '' ) return answer;
            return answer + splitUV(v);
        }
        let make = '';
        make += '(';
        make += splitUV(v) + ')';
        u = u.substring(1, u.length-1 );
        let copyU='';
        for( const gual of u ) {
            if( gual === '(') copyU +=')';
            else copyU += '(';
        }
        return make + copyU;
    }
} 

function isRightStr(checkStr) {
    const stack = [];
    for( let i = 0; i < checkStr.length; i++ ) {
        if( checkStr[i] === '(' ) stack.push('(');
        else {
            if( !stack.length ) return false;
            stack.pop();
        }
    }
    return true;
}
