function solution(jobs) {

    let priorityQueue = [];

    const length = jobs.length;

    //총 걸린시간
    let totalTime = 0;

    //현재시간
    let nowTime = 0;

    //요청 순서대로 일단 정렬
    jobs.sort((job1, job2) => {
        if( job1[0] == job2[0] ) {
            return job1[1] - job2[1]
        }
        return job1[0] - job2[0];
    });

    while( jobs.length || priorityQueue.length ) {
        //아무 작업이 없으면
        if( !priorityQueue.length ) {
            const firstJob = jobs.shift();

            const emptyTime = firstJob[0] - nowTime;

            totalTime += firstJob[1];

            nowTime += firstJob[1] + emptyTime;
            priorityQueue = jobs.filter(job => job[0] <= nowTime);
            priorityQueue.sort((a, b) => a[1] - b[1]);
            jobs = jobs.filter(job => job[0] > nowTime);
            continue;
        }

        const firstJob = priorityQueue.shift();

        const delayTime = nowTime - firstJob[0];
        totalTime += firstJob[1] + delayTime;

        nowTime += firstJob[1];

        if( jobs.length ) {

            const arr = jobs.filter(job => job[0] <= nowTime);
            priorityQueue = [...priorityQueue, ...arr]
        }

        priorityQueue.sort((a, b) => a[1] - b[1]);
        jobs = jobs.filter(job => job[0] > nowTime);
    }
    return Math.floor( totalTime / length )
}