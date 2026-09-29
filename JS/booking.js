let scrollTimer;
document.addEventListener("DOMContentLoaded", () => {
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
    const button = document.getElementById("book-button");
    const username = document.querySelector("#username");
    const date = document.querySelector("#date");
    const time = document.querySelector("#time");
    const message = document.getElementById("booking-message");
    const display = document.querySelector(".booking-display");
    button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
        var _a;
        if (!username || !date || !time || !message || !display)
            return;
        const service = (_a = localStorage.getItem("selectedService")) !== null && _a !== void 0 ? _a : "service";
        message.innerText = `${username.value}, you have successfully booked a ${service} hair cut on ${date.value} at ${time.value}.`;
        display.style.display = "flex";
    });
});
window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    if (loader)
        loader.style.display = "none";
});
export {};
