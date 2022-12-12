function solution(my_string, num1, num2) {
    const array = [...my_string]
    const answer = array.splice(num2, 1, array[num1])
    array.splice(num1, 1, answer)
    return array.join('')
}