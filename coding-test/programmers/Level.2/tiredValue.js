function solution(k, dungeons) {

    const perArr = [];

    let result = 0;

    const makePermutation = (newArr, fixArr) => {
        if( fixArr.length == dungeons.length ) {
            perArr.push(fixArr);
            return;
        }
        for( let i = 0; i < newArr.length; i++ ) {
            const newFixArr = [...fixArr, newArr[i]];            
            const newCopyArr = [...newArr];
            newCopyArr.splice(i, 1);
            makePermutation( newCopyArr, newFixArr );
        }
    }

    for( let i = 0; i < dungeons.length; i++ ) {
        const fixArr = [dungeons[i]];
        const copyArr = [...dungeons];
        copyArr.splice(i, 1);
        makePermutation( copyArr, fixArr );
    }

    for( let i = 0; i < perArr.length; i++ ) {
        let [innerResult, copyK] = [0, k];
        for( let j = 0; j < perArr[i].length; j++ ) {
            const [tired, consume] = perArr[i][j];
            if( copyK >= tired ) {
                if( j == dungeons.length - 1 )
                    return j + 1;
                copyK -= consume;
                continue;
            }

            innerResult = j;
            break;
        }

        if( innerResult > result )
            result = innerResult;
    }

    return result;
}