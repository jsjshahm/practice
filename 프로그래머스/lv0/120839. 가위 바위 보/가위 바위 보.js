function solution(rsp) {
    const answer = rsp.split('')
    for(let i = 0; i < answer.length; i++){
        if(answer[i] == '2') {
            answer.splice(i, 1, '0')
        } else if(answer[i] == '0') {
            answer.splice(i, 1, '5')
        } else if(answer[i] == '5') {
            answer.splice(i, 1, '2')
        }
    }
    return answer.join('')
}