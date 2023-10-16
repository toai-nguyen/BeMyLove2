let header = document.getElementById("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0)
})