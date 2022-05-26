/* Menu toggle */

const closeBtn = document.querySelector(".fa-xmark");
const showBtn = document.querySelector(".fa-bars");
const navArea = document.querySelector(".nav-links")

closeBtn.addEventListener("click",() => {
    navArea.style.right = "-50%"
})

showBtn.addEventListener("click",() => {
    navArea.style.right = "0"
})