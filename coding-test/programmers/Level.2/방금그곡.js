function solution(m, musicinfos) {
    var answer = "";

    m = m.replace(/(A|C|D|F|G)#/g, replaceShop);

    const map = new Map();
    for( let i = 0; i < musicinfos.length; i++ ) {
        let [start, end, title, music] = musicinfos[i].split(',');
        let playTime = getPlayTime(start, end);        
        music = music.replace(/(A|C|D|F|G)#/g, replaceShop);
        const musicLength = music.length;
        if( musicLength > playTime ) music = music.substring(0, playTime);
        else {
            const [div, rest] = getRepeatCount(musicLength, playTime);
            music = music.repeat(div) + music.substring(0, rest);
        }
        if( music.includes(m) ) map.set(title, { title, playTime, index: i });
    }
    
    const arr = Array.from(map.values()).sort((a, b) => {
        if( a.playTime > b.playTime ) return -1;
        else if ( a.playTime < b.playTime ) return 1;
        
        if( a.index < b.index ) return -1;
        return 1;
    })
    answer = arr.length ? arr[0].title : "(None)"
    
    return answer;
}

function getPlayTime(start, end) {
    return convertToMinute(end) - convertToMinute(start);
}

function convertToMinute(time) {
    let [hour, minute] = time.split(':');
    return +hour * 60 + +minute;
}

function replaceShop(str) {
    switch(str) {
        case 'A#':
            return 'a';
        case 'C#': 
            return 'c';
        case 'D#':
            return 'd';
        case 'G#':
            return 'g';
        case 'F#':
            return 'f';
    }
}

function getRepeatCount(length, playTime) {
    return [Math.floor(playTime / length), playTime % length];
}