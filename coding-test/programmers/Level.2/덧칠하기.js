function solution(n, m, section) {
    var answer = 0;

    let currentPointer = section[0];

    for( let i = 0; i < section.length; i++ ) {
        const currentSection = section[i];
        if( currentPointer <= currentSection ) {
            currentPointer = currentSection + m;
            answer++;
        }
    }

    return answer;
}