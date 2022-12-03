function solution(numbers) {
    var answer = 0;

    const primeSet = new Set();

    const numArr = numbers.split('');

    const isPrime = (num) => {
        if( num <= 1 )
            return false;

        if( num % 2 == 0 ) {
            if( num == 2 )
                return true;
            return false;
        }

        for( let i = 2; i <= Math.floor(Math.sqrt(num)); i++ ) {
            if( num % i == 0 )
                return false;
        }
        return true;
    }

    const makePermutation = (numArr, fixNum) => {
        if( numArr.length ) {
            for( let i = 0; i < numArr.length; i++ ) {
                const newNum = fixNum + numArr[i];
                const copyArr = [...numArr];
                copyArr.splice(i, 1);
                if( isPrime(Number(newNum)) )
                    primeSet.add(Number(newNum));
                makePermutation( copyArr, newNum );
            }
        }
    }
    makePermutation(numArr, '');
    return primeSet.size;
}