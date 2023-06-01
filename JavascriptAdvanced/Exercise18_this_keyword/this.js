const iPhone7 ={
    // thuộc tính - property
    name: "Iphone 7",
    color: "pink",
    weight: 300,

    // phương thức - method
    takePhoto(){
        console.log(this)
    },
    objChild:{
        name:"object child",
        methodChild(){
            console.log(this)
        }
    }
}

iPhone7.objChild.methodChild()


function Car(name, color, weight){
    this.name = name;
    this.color = color;
    this.weight = weight;

    this.run = function(){
        console.log("running...", this)
    }
}

const porsche = new Car("Porsche", "Black and yellow liner", 2000)

porsche.run()


const button = document.querySelector("button")

button.onclick = function(){
    console.log(this)
}