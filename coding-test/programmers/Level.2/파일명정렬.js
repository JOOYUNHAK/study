function solution(files) {
    
    files.sort((a, b) => {
        let aStartNum = 0, bStartNum = 0;
        
        let headA = '', headB = '';
    
        while( a[aStartNum].match(/\D/) ) {
            headA += a[aStartNum].toLowerCase();
            aStartNum++;
        }
        while ( b[bStartNum].match(/\D/) ) {
            headB += b[bStartNum].toLowerCase();
            bStartNum++;
        } 
        if( headA < headB  ) return -1;
        if( headA > headB ) return 1;
        
        // HEAD 같으면
        let numberA = '', numberB = '';
        
        while( a[aStartNum].match(/\d/) ) {
            numberA += a[aStartNum];
            if( aStartNum == a.length - 1 || numberA.length == 5 ) break;
            aStartNum++;
        }
         while( b[bStartNum].match(/\d/) ) {
            numberB += b[bStartNum];
            if( bStartNum == b.length - 1 || numberB.length == 5 ) break;
            bStartNum++;
        }
        
        if( parseInt(numberA) < parseInt(numberB) ) return -1;
        if( parseInt(numberA) > parseInt(numberB) ) return 1;
        
        return 0;
    })
    return files;
}
