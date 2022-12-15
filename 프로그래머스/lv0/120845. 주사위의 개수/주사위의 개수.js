function solution(box, n) {
    let answer = 0
    for(let i = 0; i < box.length; i++){
        answer = parseInt(box[0] / n)  * parseInt(box[1] / n) * parseInt(box[2] / n)
    }
    return answer
}