const menuBtn = document.getElementById("menu-btn");
let menu = document.getElementById("menu");

menuBtn.addEventListener('click', navToggle)

function navToggle(){
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    menuBtn.classList.toggle("open");
}



