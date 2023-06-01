Array.prototype.foreach2 = function (callback){
    var length = this.length;
    if(typeof callback == "function") {
        for(let i=0; i<length; i++){
            callback(this[i], i)
        }
    }
}

var arr = ['duc', 'triu', 'ut'];

// arr.foreach2(function(val, index){
//     console.log(index, val)
// })


var arr2 = [1, 3, 9, 4, 5]
Array.prototype.reduce2 = function(callback, initialValue){
    var length = this.length
    let total
    if(typeof callback == "function"){
        for(let i=0; i<length; i++){
            if(initialValue==undefined){
                initialValue = this[0]
                continue
            }
            total  = callback(initialValue, this[i], i, this)
            initialValue = total
        }
    }
    return total
}

var sumArr = arr2.reduce2(function(total, val, index, arr){
    return total+val
})
console.log(sumArr)


Array.prototype.find2 = function(callback){
    var length = this.length
    let result
    for (let i = 0; i < length; i++) {
        if(callback(this[i], i, this)){
            result = this[i]
            break
        }
    }
    return result
}

var n = arr2.find2(function(val, index, arr){
    return val>3
})


Array.prototype.filter2 = function(callback){
    var length = this.length
    let result = []
    for (let i = 0; i < length; i++) {
        if(callback(this[i], i, this)){
            result.push(this[i])
        }
    }
    return result
}

var result = arr2.filter2(function(val, index, arr){
    return val>3
})

Array.prototype.map2 = function(callback){
    var length = this.length
    let result = []
    for (let i = 0; i < length; i++) {
        result.push(callback(this[i], i, this))
    }
    return result
}

var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']
var html = courses.reduce(function(result, val, index, arr){
    return result + `<li>${val}</li>`
},"")
document.write(html)