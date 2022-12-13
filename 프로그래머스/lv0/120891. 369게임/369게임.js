function solution(order) {
    let sum = 0
    const numbers = String(order)
    const answer = numbers.split('').map(i => Number(i))
    for(let i = 0; i < answer.length; i++){
        if(answer[i] === 3 || answer[i] === 6 || answer[i] === 9){
            sum += 1
        }
    }
    return sum
}