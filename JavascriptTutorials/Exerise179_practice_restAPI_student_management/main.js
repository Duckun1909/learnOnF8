var studentList = document.querySelector(".studentInfo tbody");

var studentAPI = "http://localhost:3000/students"

var createBtn = document.querySelector("#create")

let studentRenderList = new Array();
var stdForm = document.getElementById("studentForm")

function start(){
    getStudent(renderStudent);
}
start()

// Function
function getStudent(callback){
    fetch(studentAPI)
    .then(function(res){
        return res.json()
    })
    .then(function(students){
        studentRenderList = students
        callback(studentRenderList);
    })                     
}

function createStudent(data, callback){
    const request = new Request(studentAPI, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
    })

    fetch(request)

    callback(studentRenderList)
    stdForm.reset()
}

function deleteStudent(studentID, callback){
    const request = new Request(studentAPI+ '/' + studentID, {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json'
        }
    })

    fetch(request)
    callback(studentRenderList)
}

function updateStudent(data, callback){
    const request = new Request(studentAPI+ '/' + data.id, {
        method: 'PATCH',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    fetch(request)
    studentRenderList = studentRenderList.map(function(val){
        if(val.id==data.id){
            val.name = data.name
            val.dob = data.dob
            val.class = data.class
            val.average = data.average
        }
        return val
    })
    callback(studentRenderList)
}



function renderStudent(students){
    var html = studentRenderList.map(function(val){
        return `
            <tr>
                <td>${val.id}</td>
                <td>${val.name}</td>
                <td>${val.dob}</td>
                <td>${val.class}</td>
                <td>${val.average}</td>
                <td style="text-align:center;">
                    <button class="updateStudent" onclick="renderStudentToForm(${val.id})"  style="background-color:yellow; color:black;">Update</button>
                    <button class"deleteStudent" onclick="handleDeleteForm(${val.id})"  style="background-color:red; color:white">Delete</button>
                </td>
            </tr>
        `
    })
    studentList.innerHTML = html.join('')
}

function handleCreateForm(){
    var name = document.querySelector('input[name="name"]').value
    var dob = document.querySelector('input[name="dob"]').value
    var clas = document.querySelector('input[name="class"]').value
    var average = document.querySelector('input[name="average"]').value
    var id = studentRenderList.length==0?1:studentRenderList[studentRenderList.length-1].id+1
    var data = {
        name: name,
        dob:dob,
        class:clas,
        average:average,
        id:id
    }
    studentRenderList.push(data);
    createStudent(data, renderStudent)
}
    
function handleDeleteForm(id){
    studentRenderList = studentRenderList.filter(function(val){
        return val.id!=id
    })
    deleteStudent(id, renderStudent)
}

function renderStudentToForm(id){
    var student = studentRenderList.find(function(val){
        return val.id==id
    })
    document.querySelector('input[name="name"]').value = student.name
    document.querySelector('input[name="dob"]').value=student.dob
    document.querySelector('input[name="class"]').value=student.class
    document.querySelector('input[name="average"]').value=student.average
    document.getElementById("mod").setAttribute("onclick", `handleUpdateForm(${id})`)
    document.getElementById("mod").innerText = "Save"
}

function handleUpdateForm(id){
    var name = document.querySelector('input[name="name"]').value
    var dob = document.querySelector('input[name="dob"]').value
    var clas = document.querySelector('input[name="class"]').value
    var average = document.querySelector('input[name="average"]').value
    var id = id
    var data = {
        name: name,
        dob:dob,
        class:clas,
        average:average,
        id:id
    }

    updateStudent(data, renderStudent)
    stdForm.reset()
}