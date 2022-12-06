function solution(bridge_length, weight, truck_weights) {

    let queue = [];

    let nowWeight = 0;

    let time = 0;

    while( true ) {
        time += 1;

        for( let i = 0; i < queue.length; i++ ) {

            //가장 먼저 들어간 트럭이 다 못건넜으면
            //이후 들어간 트럭들도 못 나오기 때문에 
            //for문 바로 탈출
            if( queue[queue.length - i - 1][1] + bridge_length > time )
                break;

            //다 건넌 트럭이면
            if( queue[queue.length - i - 1][1] + bridge_length == time ) {
                //현재 무게에 다 건넌 트럭 무게 마이너스
                nowWeight -= queue[queue.length - i - 1][0];
                //queue에 건넌 트럭 제외
                queue.splice(queue.length - i - 1, 1);
                i--;
            }
        }

        //건너는 트럭도 없고 건너야할 트럭도 없으면 시간 return
        if( !queue.length && !truck_weights.length )
            return time;

        //현재 건너고 있는 트럭이 최대로 건널 수 있는 트럭보다
        //적으면서 건너야 할 트럭이 남아있는 경우
        if( queue.length < bridge_length && truck_weights.length ) {
            //이제 올라갈 수 있는 트럭무게
            const nowTruckWeight = truck_weights.shift();
            //이제 올라갈 트럭무게와 현재 올라가 있는 
            //트럭무게를 더해도 허용 가능 무게보다 적을 경우
            //queue에 추가
            if( (nowWeight + nowTruckWeight) <= weight ) {
                //무게랑 올라간 시간으로 추가
                queue.unshift([nowTruckWeight, time]);
                //현재 무게에 지금 올라간 트럭무게 추가
                nowWeight += nowTruckWeight;
                continue;
            }
            //만약 무게 초과로 올라가지 못하면
            //다시 건너야할 목록에 추가
            truck_weights.unshift(nowTruckWeight);
            time = queue[queue.length - 1][1] + bridge_length - 1
        }
    }    
}