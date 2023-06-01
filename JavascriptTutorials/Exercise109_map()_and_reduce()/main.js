// Array methods 
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
        name:'Html,css',
        coin: 350
    },
    {
        id:5,
        name:'C++',
        coin: 125
    }
]

// Map() dùng để chỉnh sửa thay đổi giá trị của phần tử trong mảng
// Map() trả về mảng đã được thay đổi
// Map(value , index, mảng cũ)

function courseHandler(val, index, originArr){
    return {
        id:val.id,
        name: 'Khóa học' + val.name,
        coin: val.coin+50,
        originArr
    }
}
var newCourse = course.map(courseHandler)
console.log(newCourse)

// Reduce() dùng để trả về một giá trị duy nhất sau khi xử lý mảng
// Reduce(function(biến tạm, value, index, originArr), giá trị ban đầu cho biến tạm)
function totalCalculate(accumulator, val, index){
    accumulator+=val.coin;
    return accumulator;
}
var totalCoin = course.reduce(totalCalculate, 0)
console.table({total: totalCoin});