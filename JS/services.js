let scrollTimer;
function configureImageSliders() {
    document.querySelectorAll(".services-section1 .card, .services-section2 .card").forEach((card) => {
        const images = Array.from(card.querySelectorAll("img"));
        if (images.length < 2)
            return;
        let currentIndex = 0;
        images.forEach((image, index) => { image.style.display = index === 0 ? "block" : "none"; });
        window.setInterval(() => {
            images[currentIndex].style.display = "none";
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].style.display = "block";
        }, 10000);
    });
}
document.addEventListener("DOMContentLoaded", () => {
    var _a, _b;
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (!navbar)
            return;
        navbar.style.backgroundColor = "black";
        if (scrollTimer)
            window.clearTimeout(scrollTimer);
        scrollTimer = window.setTimeout(() => { navbar.style.backgroundColor = "transparent"; }, 200);
    });
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu === null || navMenu === void 0 ? void 0 : navMenu.classList.toggle("active");
    });
    const firstSection = document.querySelector(".services-section1");
    const secondSection = document.querySelector(".services-section2");
    (_a = document.querySelector(".next")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        if (firstSection)
            firstSection.style.display = "none";
        if (secondSection)
            secondSection.style.display = "flex";
    });
    (_b = document.querySelector(".prev")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        if (firstSection)
            firstSection.style.display = "flex";
        if (secondSection)
            secondSection.style.display = "none";
    });
    document.querySelectorAll(".book-service").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const service = link.dataset.service;
            if (!service)
                return;
            localStorage.setItem("selectedService", service);
            window.location.href = "../HTML/booking.html";
        });
    });
    configureImageSliders();
});
window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    if (loader)
        loader.style.display = "none";
});
export {};
