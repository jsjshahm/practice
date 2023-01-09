function solution(my_string) {
    const array = my_string.split('')
    const answer = Array.from(new Set(array))
    return answer.join('')
}