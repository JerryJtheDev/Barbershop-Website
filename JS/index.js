let scrollTimer;
function setNavbarScrollState() {
    const navbar = document.querySelector(".navbar");
    if (!navbar)
        return;
    navbar.style.backgroundColor = "black";
    if (scrollTimer)
        window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(() => {
        navbar.style.backgroundColor = "transparent";
    }, 200);
}
function rotateLandingImage() {
    const images = Array.from(document.querySelectorAll(".landing-page img"));
    const currentImage = document.querySelector(".landing-page img.current");
    if (!currentImage || images.length < 2)
        return;
    const nextImage = images[(images.indexOf(currentImage) + 1) % images.length];
    currentImage.classList.replace("current", "previous");
    nextImage.style.opacity = "0";
    nextImage.classList.add("current");
    window.setTimeout(() => {
        nextImage.style.opacity = "1";
        currentImage.classList.remove("previous");
    }, 1000);
}
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu === null || navMenu === void 0 ? void 0 : navMenu.classList.toggle("active");
    });
    window.addEventListener("scroll", setNavbarScrollState);
    window.setInterval(rotateLandingImage, 10000);
});
window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    if (loader)
        loader.style.display = "none";
});
export {};
