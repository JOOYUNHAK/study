function solution(id_list, report, k) {

    answer = new Array(id_list.length).fill(0);

    report = [...new Set(report)];

    const map = new Map();

    for( let i = 0; i < id_list.length; i++ ) {
        map.set(id_list[i], JSON.stringify({
            'reportMeList': ''
        }))
    }    

    for( let i = 0; i < report.length; i++ ) {
        const [reporter, reported] = report[i].split(' ');

        let { reportMeList } = JSON.parse(map.get(reported));

        reportMeList = !reportMeList.length ? reporter : reportMeList + ',' + reporter;

        map.set(reported, JSON.stringify({ reportMeList }))
    }

    let queue = [];

    for( let i = 0; i < id_list.length; i++ ) {
        const reportedList = JSON.parse(map.get(id_list[i])).reportMeList.split(',');
        if( reportedList.length < k )
            continue;

        queue = [...queue, ...reportedList]
    }

    for( let i = 0; i < queue.length; i++ ) {
        const index = id_list.indexOf(queue[i]);
        answer[index] += 1;
    }

    return answer;
}