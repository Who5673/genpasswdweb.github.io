const openBtn = document.getElementById("abcdef");
const closeBtn = document.getElementById("ghiklm");
const menu = document.getElementById("manu");
const btn = document.getElementById("buttonoptionI");
const abc = document.getElementById("buttonoptionII");

openBtn.addEventListener("click", () => {
    menu.classList.add("show");
})
closeBtn.addEventListener("click", () => {
    menu.classList.remove("show");
})

abc.addEventListener("click", () => {
    window.location.href = "password_generator.html";
})
/*btn.addEventListener("click", () => {
    window.location.href = ""
})*/
