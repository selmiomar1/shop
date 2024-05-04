const wapper = document.querySelector(".sliderwarpper")
const menuitem = document.querySelectorAll(".menuitem")
menuitem.forEach((item, index) => {
    item.addEventListener("click", () =>{
        wapper.style.transform = `translateX(${-100 * index}vw)`
    })
})