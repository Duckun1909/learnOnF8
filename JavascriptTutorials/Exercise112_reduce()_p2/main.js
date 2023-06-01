// Array methods 
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

var total = course.reduce(function(total, val, index, arr){
    console.log(total)
    return total+val.coin
}) // initial value