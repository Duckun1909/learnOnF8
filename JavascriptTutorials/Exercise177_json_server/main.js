var courseApi = 'http://localhost:3000/courses';
var renderCourse = document.querySelector("ul")

fetch(courseApi)
.then(function(respone){
    return respone.json()
})
.then(function(courses){
    var html = courses.map(function(val){
        return `
            <li>Course: ${val.name}, Fee: ${val.fee}</li>
        `
    })
    renderCourse.innerHTML = html.join('')
})