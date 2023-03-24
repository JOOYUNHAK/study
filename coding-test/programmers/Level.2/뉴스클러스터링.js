function solution(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let arr1 = [], arr2 = [];
    
    for( let i = 0; i < str1.length - 1; i++ ) {
        const sliceStr = str1[i] + str1[i+1];
        if( sliceStr.match(/^[a-z]*$/g) ) arr1.push(sliceStr);
    }
    for( let i = 0; i < str2.length - 1; i++ ) {
        const sliceStr = str2[i] + str2[i+1];
        if( sliceStr.match(/^[a-z]*$/g)) arr2.push(sliceStr);
    } 
    
    if( !arr1.length && !arr2.length ) return 65536;
    
    const same = [];
    
    for( let i = 0; i < arr1.length; i++ ) {
        if( arr2.includes(arr1[i]) ) {
            const index = arr2.indexOf(arr1[i]);
            same.push(arr1[i]);
            arr2.splice(index, 1);
            continue;
        }
    }
    return Math.floor(same.length / ( arr2.length + arr1.length ) * 65536);
}