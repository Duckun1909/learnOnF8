const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce(function(sum, val, index, arr){
    return sum+val;
})
console.log(result)


Array.prototype.reduce2 = function(callback, result){
    let index = 0;

    if(arguments.length<2){
        index = 1;
        result = this[0]
    }

    for (; index < this.length; index++) {
        result = callback(result, this[index], index, this);
    }
    return result
}

const testReduce2 = numbers.reduce2(function(total , val, index, arr){
    console.log(total , val, index, arr)
    return total+val;
})
console.log(testReduce2)