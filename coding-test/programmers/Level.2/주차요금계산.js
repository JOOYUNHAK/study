function solution(fees, records) {
    var answer = [];

    const carMap = new Map();
    const feeMap = new Map();

    // 기본시간, 기본요금, 단위시간, 단위요금
    const [baseTime, baseFee, perMin, perFee] = fees;

    records.map( record  => {
        const [time, carNum, inOut] = record.split(' ');
        let [hour, minute] = time.split(':');
        minute = +minute + +hour * 60;

        if( inOut === 'IN') carMap.set(carNum, minute);
        else {
            const inMinute = carMap.get(carNum);
            const total = minute - +inMinute;
            feeMap.set(carNum, (feeMap.get(carNum) || 0) + total);
            carMap.delete(carNum);
        }
    })

    for( let carNum of carMap.keys() ) {
        const inMinute = carMap.get(carNum);
        const total = 23 * 60 + 59 - +inMinute;
        feeMap.set(carNum, (feeMap.get(carNum) || 0) + total);
    }

    const sortArr = [...feeMap].sort((a, b) => a[0] - b[0]);

    for( let i = 0; i < sortArr.length; i++ ) {
        const total = sortArr[i][1];
        if( total <= baseTime )
            answer.push(baseFee);
        else {
            const overTime = Math.ceil( (total - baseTime) / perMin );
            answer.push(baseFee + overTime * perFee);
        }
    }
    return answer;
}