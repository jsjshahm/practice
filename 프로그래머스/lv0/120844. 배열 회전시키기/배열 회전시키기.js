function solution(numbers, direction) {
    if(direction === "left"){
        numbers.push(numbers[0])
        numbers.shift()
    } else if(direction === "right"){
        numbers.unshift(numbers[numbers.length - 1])
        numbers.pop()
    }
    return numbers
}