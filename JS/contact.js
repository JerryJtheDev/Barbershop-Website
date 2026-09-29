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
    const form = document.querySelector("form");
    const name = document.querySelector("#Name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!name || !email || !message)
            return;
        if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email.value)) {
            alert("Please enter a valid Gmail address.");
            return;
        }
        try {
            emailjs.init("_WnrWch_sOW9D93rs");
            await emailjs.send("service_oevbe2h", "template_ynm7b79", { name: name.value, email: email.value, message: message.value });
            alert("Email sent successfully!");
        }
        catch (_a) {
            alert("Failed to send email. Please try again.");
        }
    });
});
window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    if (loader)
        loader.style.display = "none";
});
export {};
