function solution(my_string) {
    const answer = my_string.split('')
    const numbers = answer.filter(answer => answer >= 0)
    const number = numbers.map((i) => Number(i))
    let sum = 0
    number.forEach((item) => {
      sum += item;
    })
  return sum
}
