function solution(s) {
    const array = s.split(' ').map(i => Number(i))
    const answer = [Math.min(...array), Math.max(...array)]
    return answer.join(' ')
    
}