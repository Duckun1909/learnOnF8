const teacher = {
    firstname: 'John',
    lastname: 'Smith'
}

function greet(greeting, message){
    return greeting + ' ' + this.firstname + ' ' + this.lastname + ' ' + message
}

const greeting = "Hello teacher"
const message = "Where do you go?"

const mess = greet.apply(teacher, [greeting , message])

console.log(mess)