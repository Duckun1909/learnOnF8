// Pain:
//     Callback hell
//     Pyramid of doom

// setTimeout(function(){
//     console.log(1)
//     setTimeout(function(){
//         console.log(2)
//         setTimeout(function(){
//             console.log(3)
//             setTimeout(function(){
//                 console.log(4)
//             },1000)
//         },1000)
//     },1000)
// },1000)


// Theory and use way

// Process:
    // 1.Pending
    // 2.Fulfilled
    // 3.Rejected

// var promise = new Promise(
//     // Execute
//     function(resolve, reject){
//         // Logic
//         // success: resolve
//         // Fail: reject

//         // Fake Call API
//         resolve()

//         // reject("Error logic")
//     }


// )

// promise
// .then(function(course){
//     return 1
// })
// .then(function(data){
//     console.log(data)
//     return 2
// }) 
// .then(function(data){
//     console.log(data)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(function(){
//     console.log("done")
// })



// Promise(chain)
// then trước return lại giá trị là tham số đầu vào của then sau
// nếu return về một promise và promise này gọi đến resolve hoặc reject thì ".then .catch" kế tiếp sẽ là của promise này
// function sleep(data, ms){
//     return new Promise(function(resolve){
//         setTimeout(resolve(data), ms)
//     })
// }

// sleep(1000)
// .then(function(course){
//     return sleep(1, 1000)
// })
// .then(function(data){
//     console.log(data)
//     return sleep(2, 1000)
// }) 
// .then(function(data){
//     console.log(data)
//     return sleep(1000)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(function(){
//     console.log("done")
// })



// 1.Promise.resolve
// 2.Promise.reject
// 3.Promise.all nhận tham số truyền vào là một mảng các promise dùng để chạy đồng thời nhiều promise một lúc

var promise1= new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([1])
        }, 3000)
    }
)

var promise2= new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([2,3])
        }, 1000)
    }
)

var promise3 = Promise.reject('error')  // Nếu một promise trong Promise.all gọi đến reject thì sẽ thông báo lỗi luôn

Promise.all([promise1, promise2, promise3])
.then(function(result){
    var result1 = result[0]
    var result2 = result[1]
    console.log(result1.concat(result2))
})



// Practice and example
var users = [
    {
        id: 1,
        name: "Huỳnh Đức"
    },
    {
        id: 2,
        name: "BillGates"
    },
    {
        id: 3,
        name: "Muck Zerkerburg"
    }
]

var comments = [
    {
        id: 1,
        userID: 1,
        content: "con chó dương ăn cứt không"
    },
    {
        id: 2,
        userID: 3,
        content: "Bố m xiên chết mẹ m h!"
    },
    {
        id: 3,
        userID: 2,
        content: "tk chó long điếm vl"
    }
]

// 1. lấy comment
// 2. từ comment lấy ra userID
// 3. từ userID lấy ra user tương ứng

// Fake API
function getComment(){
    return new Promise(
        function(resolve){
            setTimeout(function(){
                resolve(comments)
            },2000)
        }
    )
}

function getUserByID(userIds){
    return new Promise(
        function(resolve){
            setTimeout(function(){
                var result =users.filter(function(val, index, arr){
                    return {
                        user: userIds.includes(val.id),

                    }
                })
                resolve(result)
            }, 3000)
        }
    )
}

getComment()
.then(function(comments){
    var userIDs = comments.map(function(val, index , arr){
        return val.userID
    })

    return getUserByID(userIDs)
    .then(function(users){
        return {
            users: users,
            comments: comments
        }
    })
})
.then(function(data){
    console.log(data)
    let html = ''
    data.comments.forEach(element => {
        var user = data.users.find(function(user){
            return user.id === element.userID;
        })
        html += `
        <tr>
            <td>${element.id}</td>
            <td>${user.name}</td>
            <td>${element.content}</td>
        </tr>
        `
    });
    document.querySelector("#comments tbody").innerHTML = html
})  