let header = document.getElementById("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0)
})

let addBtn = document.getElementById("add");
addBtn.addEventListener("click", function(){
    addBtn.classList.toggle("active");
    header.classList.toggle("show");
})