function solution(my_string) {
    const array = my_string.toLowerCase()
    const answer = array.split('')
    const alphabet = answer.sort()
    const string = alphabet.join('')
    return string
}