let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function(e) {
    menu.classList.toggle("fas-times");
    navbar.classList.toggle("active");
})

window.onscroll = function(e) {
    menu.classList.remove("fas-times");
    navbar.classList.remove("active");
}


let slides = document.querySelectorAll(".home .slider");
let index = 0;

function next() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

function prev() {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
}