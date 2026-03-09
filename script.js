const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const navBar = document.getElementById("main-nav");
const overlay = document.getElementById("overlay");

function handleResize() {
    if (window.innerWidth >= 900) {
        navBar.classList.remove("menu");
        navBar.classList.remove("active");
        openMenuBtn.setAttribute("aria-expanded", "false");
        overlay.classList.remove("active");
        overlay.hidden = true;
    }
}

window.addEventListener("resize", handleResize);

openMenuBtn.addEventListener("click", () => {
    navBar.classList.add("menu");
    openMenuBtn.setAttribute("aria-expanded", "true");
    overlay.hidden = false;

    requestAnimationFrame(() => {
        overlay.classList.add("active");
        navBar.classList.add("active");
    });
});

closeMenuBtn.addEventListener("click", () => {
    navBar.classList.remove("active");
    openMenuBtn.setAttribute("aria-expanded", "false");
    overlay.classList.remove("active");

    setTimeout(() => {
        navBar.classList.remove("menu");
        overlay.hidden = true;
    }, 350);
});

overlay.addEventListener("click", () => {
    navBar.classList.remove("active");
    openMenuBtn.setAttribute("aria-expanded", "false");
    overlay.classList.remove("active");

    setTimeout(() => {
        navBar.classList.remove("menu");
        overlay.hidden = true;
    }, 350);
});