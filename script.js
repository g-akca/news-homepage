const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const navBar = document.getElementById("main-nav");

function handleResize() {
    if (window.innerWidth >= 960) {
        navBar.classList.remove("menu");
        openMenuBtn.setAttribute("aria-expanded", "false");
    }
}

window.addEventListener("resize", handleResize);

openMenuBtn.addEventListener("click", () => {
    navBar.classList.add("menu");
    openMenuBtn.setAttribute("aria-expanded", "true");
});

closeMenuBtn.addEventListener("click", () => {
    navBar.classList.remove("menu");
    openMenuBtn.setAttribute("aria-expanded", "false");
});