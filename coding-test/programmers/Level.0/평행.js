function solution(dots) {

    const incline = []

    for(let i = 0 ; i < dots.length ; i ++) {
        for(let j = i+1 ; j < dots.length ; j ++) {

            const eachIncline = (dots[i][1]-dots[j][1]) / (dots[i][0]-dots[j][0])

            if(incline.includes(eachIncline)) 
                return 1
            incline.push(eachIncline)
        }
    }
    return 0
}