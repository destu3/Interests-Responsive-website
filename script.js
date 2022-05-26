/* Menu toggle */

const closeBtn = document.querySelector(".fa-xmark");
const showBtn = document.querySelector(".fa-bars");
const navArea = document.querySelector(".nav-links")

closeBtn.addEventListener("click",() => {
    navArea.style.right = "-50%"
    showBtn.style.color = "#231f20"
})

showBtn.addEventListener("click",() => {
    navArea.style.right = "0"
    showBtn.style.color = "rgb(148, 81, 126, 0.6 )"
})