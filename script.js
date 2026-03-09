const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const navBar = document.getElementById("main-nav");
const overlay = document.getElementById("overlay");

function handleResize() {
    if (window.innerWidth >= 900) {
        navBar.classList.remove("menu");
        openMenuBtn.setAttribute("aria-expanded", "false");
        overlay.classList.remove("active");
    }
}

window.addEventListener("resize", handleResize);

openMenuBtn.addEventListener("click", () => {
    navBar.classList.add("menu");
    openMenuBtn.setAttribute("aria-expanded", "true");
    overlay.style.display = "block";
    setTimeout(() => overlay.classList.add("active"), 1);
});

closeMenuBtn.addEventListener("click", () => {
    navBar.classList.remove("menu");
    openMenuBtn.setAttribute("aria-expanded", "false");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    navBar.classList.remove("menu");
    openMenuBtn.setAttribute("aria-expanded", "false");
    overlay.classList.remove("active");
});