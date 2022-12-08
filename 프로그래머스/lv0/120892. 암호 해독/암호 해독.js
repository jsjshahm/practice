function solution(cipher, code) {
    const answer = [...cipher]
    const array = []
    for(let i = 0; i < answer.length; i++){
        if(i%code === code - 1){
            array.push(answer[i])
        }
    }
    return array.join('')
}