function solution(my_string, letter) {
    let regaxAllCase = new RegExp(letter, "g")
    return my_string.replace(regaxAllCase, '')
}

