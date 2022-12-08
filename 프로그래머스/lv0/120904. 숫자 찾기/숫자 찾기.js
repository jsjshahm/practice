function solution(num, k) {
    const array = String(num)
    const answer = Array.from(array)
    for(let i = 0; i < answer.length; i++){
        if(answer[i] == k){
            return i + 1
        } else if(answer.findIndex(n => n == k) == -1){
            return -1
        }
    }
}