function solution(my_string) {
    const answer = my_string.split('')
    for(let i = 0; i < answer.length; i++){
        if(answer[i] == "a" || answer[i] == "e" || answer[i] == "i" || answer[i] == "o" || answer[i] == "u"){
            answer.splice(i, 1, '')
        }
    }
    return answer.join('')
}