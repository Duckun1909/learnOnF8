// Array methods 
//     forEach()
//     every()
//     some()
//     find()
//     filter()
//     map()
//     reduce()

var course = [
    {
        id:1,
        name:'Javascript',
        coin: 250
    },
    {
        id:2,
        name:'Ruby',
        coin: 270
    },
    {
        id:3,
        name:'Java',
        coin: 500
    },
    {
        id:4,
        name:'Javascript',
        coin: 350
    },
    {
        id:5,
        name:'C++',
        coin: 125
    }
]

course.forEach(function(value, index){
    console.log(value)
})

// Every() kiểm tra tất cả các phần tử trong mảng thỏa mãn điều kiện nào đó
// Every() trả về kiểu boolean
var isFree = course.every(function(value, index){
    return value.coin===0;
})
console.log(isFree)

// Some() kiểm tra một trong các phần tử trong mảng thỏa mãn điều kiện nào đó
// Some() trả về kiểu dữ liệu boolean
var isFree = course.some(function(value, index){
    return value.coin===0;
})
console.log(isFree)

// Find() kiểm tra một trong các phần tử trong mảng thỏa mãn điều kiện nào đó
// Find() trả về phần tử được tìm thấy nếu không trả về undefind
// Find() chỉ tìm được một phần tử duy nhất và sẽ dừng lại nếu tìm được ở lần đầu tiên
var c = course.find(function(value, index){
    return value.name === 'Javascript'
})
console.log(c)

// Filter() kiểm kiểm tra một trong các phần tử trong mảng thỏa mãn điều kiện nào đó
// Filter() cũng giống như Find() nhưng khác ở chỗ Filter() trả về một mảng các phần tử thỏa mãn
var c = course.filter(function(value, index){
    return value.name === 'Javascript'
})
console.log(c)