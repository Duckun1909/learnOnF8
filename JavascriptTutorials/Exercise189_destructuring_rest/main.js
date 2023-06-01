// Destructuring : phân rã có thể dùng cho mảng và object
// Với mảng thì dùng []
// Với object thì dùng {}
var array  = [1,2,3]
var [a,b,c] = array
console.log(a,b,c)

var student = {
    name: "Đức",
    age:19
}
var {name, age} = student
console.log(a,b)


// Rest parameters
// Rest : dùng để tách các phần tử con thành một mảng riêng hay object riêng
// Rest chỉ tách ra được các phần tử thứ 2 trở đi
// Rest khi dùng với object phải đặt tên biến giống với thuộc tính của object 
// Khi trong object có một object khác mà lại xuất hiện thuộc tính giống nhau thì lúc lấy ra phải đặt tên lại băng cách dùng dấu :
var array = ["Java", "C++", "HTML"]
var [a, ...rest] = array
console.log(a, rest)


var person = {
    name:"Đụt",
    job: "Software Engineer",
    chirldren:{
        name: "Đĩ",
        age: 2
    }
}

var {name, ...newObject} = person;
console.log(name, newObject)


// Nếu không đặt tên lại thì biến viết sau sẽ ghì đè
var {name:parentName, chirldren:{name:childrenName}} = person
console.log(parentName, childrenName)
