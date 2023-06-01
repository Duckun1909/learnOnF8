function hightLight([first, ...strings], ...values){
    return values.reduce((prev, val)=>prev+ `<span style="color: blue">${val}</span>` + strings.shift(),first)
}

var coures = "HTML"
var brand = "F9"

// Khi truyền đối số như này rest sẽ nhận vào 3 giá trị 
// Gồm 1 mảng và 2 nội suy
// Mảng sẽ chứa các phần tử là các giá trị bị ngăn cách bởi các nội suy ví dụ ["Học lập trình, tại, !"]
var html = hightLight`Học lập trình ${coures} tại ${brand}!`;
console.log(document.querySelector("div").innerHTML = html)