function solution(array, height) {
    let sum = 0
    for(i = 0; i < array.length; i++){
        if(array[i] > height){
            sum += 1
        } else if (array[i] <= height){
            sum = 0
        }
    }
    return sum;
}