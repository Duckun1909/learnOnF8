var postApi = 'https://jsonplaceholder.typicode.com/posts'
var userApi = 'https://jsonplaceholder.typicode.com/users'
let html = ''
var renderPost = document.querySelector('table tbody');

fetch(postApi)
.then(function(reponse){
    return reponse.json();
})
.then(function(posts){
    fetch(userApi)
    .then(function(reponse){
        return reponse.json()
    })
    .then(function(users){
        posts.forEach(element => {
            var user = users.find(function(val){
                return val.id === element.userId;
            })
            html += `
                <tr>
                    <td>${element.id}</td>
                    <td>${user.name}</td>
                    <td>${element.title}</td>
                    <td>${element.body}</td>
                </tr>
            `
        });
        renderPost.innerHTML = html
    })
})