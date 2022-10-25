function solution(numbers) {
    var answer = numbers.reduce((sum, currValue) => sum + currValue
                                             , 0);
    return answer/numbers.length;
}