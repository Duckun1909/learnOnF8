const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
var tabHeaderItemList = $$(".tabHeader_content-item")
var tabBodyView = $$(".tabBody-item")


tabHeaderItemList.forEach((val, index)=>{
    val.addEventListener("click", function(e){
        $(".tabHeader_content-item.tabHeader-active").classList.remove("tabHeader-active")
        this.classList.add("tabHeader-active")
        translateScrollBar(index*100)
        $(".tabBody-item.tabBody-item--active").classList.remove("tabBody-item--active")
        tabBodyView[index].classList.add("tabBody-item--active")
    })
})

function translateScrollBar(distance){
    $(".tabHeader_scrollbar div").style.transform = `translateX(${distance}%)`;
}