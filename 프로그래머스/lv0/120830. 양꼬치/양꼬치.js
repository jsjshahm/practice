function solution(n, k) {
    let juice = k - parseInt(n / 10)
    var answer = n * 12000 + juice * 2000;
    return answer;
}