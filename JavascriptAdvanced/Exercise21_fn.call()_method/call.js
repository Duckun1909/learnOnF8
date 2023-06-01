const teacher = {
    firstName: "Bill",
    lastName: "Gates"
}

const me = {
    firstName: "Pham",
    lastName: "Duc",
    getFullName(){
        return this.firstName + " " + this.lastName
    }
}

console.log(me.getFullName.call(teacher)) // Kĩ thuật mượn hàm bằng Call()



function Animal(name, weight){
    this.name = name
    this.weight = weight
}

function Goat(name, weight, legs){
    Animal.call(this, name, weight)
    this.legs = legs
}

const huynhDuc = new Goat("Huynh Đức", 100, 2)

console.log(huynhDuc) // Tính kế thừa khi sử dụng Call()