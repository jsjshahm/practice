function solution(array) {
    let maxNum = 0;
    let index = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] < array[i + 1]){
            maxNum = array[i + 1]
            index = i + 1
        } 
    }
    return [maxNum, index]
}