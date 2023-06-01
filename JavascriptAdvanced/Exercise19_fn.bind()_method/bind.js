// this.firstName = "Minh"
// this.lastName = "Thu"

// const teacher = {
//     firstName : "Minh",
//     lastName : "Thảo",
//     getFullName(){
//         return this.firstName + " " + this.lastName
//     }
// }

// console.log(teacher.getFullName()) // Minh Thảo

// const getTeachername = teacher.getFullName.bind(teacher)

// console.log(getTeachername()) // Minh Thu 
// Khi không dùng teacher trỏ đến trực tiếp thì this lúc này là đối tượng window
// Chúng ta dùng phương thức bind() để tạo ra một hàm mới có this lúc này là teacher
// teacher.getFullName.bind(teacher)


const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const app = (()=>{
    const name = $("#name")
    const addBtn = $("button")
    const list = $("#list")

    const cars = [];

    return {
        add(car){
            cars.push(car)
            this.render()
        },
        remove(index){
            cars.splice(index, 1)
            this.render()
        },
        render(){
            var html = cars.map((car, index)=>
                `<li>
                    ${car}
                    <span class="delete" data-index="${index}" style="color:red;">X</span>
                </li>`
            ).join('')
console.log(cars)
            list.innerHTML = html
        },
        init(){
            this.render()
            addBtn.onclick = ()=>{
                const car = name.value
                this.add(car)
                name.value = ''
            }

            list.onclick = (e)=>{
                const removeBtn = e.target.closest(".delete")
                if(removeBtn){
                    this.remove(removeBtn.dataset.index)
                }
            }
        }
    }
})()

app.init()