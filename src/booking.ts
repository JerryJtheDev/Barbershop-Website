let scrollTimer: ReturnType<typeof window.setTimeout> | undefined;

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector<HTMLElement>(".navbar");
  window.addEventListener("scroll", () => {
    if (!navbar) return;
    navbar.style.backgroundColor = "black";
    if (scrollTimer) window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(() => { navbar.style.backgroundColor = "transparent"; }, 200);
  });

  const hamburger = document.querySelector<HTMLElement>(".hamburger");
  const navMenu = document.querySelector<HTMLElement>(".nav-menu");
  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu?.classList.toggle("active");
  });

  const button = document.getElementById("book-button");
  const username = document.querySelector<HTMLInputElement>("#username");
  const date = document.querySelector<HTMLInputElement>("#date");
  const time = document.querySelector<HTMLInputElement>("#time");
  const message = document.getElementById("booking-message");
  const display = document.querySelector<HTMLElement>(".booking-display");
  button?.addEventListener("click", () => {
    if (!username || !date || !time || !message || !display) return;
    const service = localStorage.getItem("selectedService") ?? "service";
    message.innerText = `${username.value}, you have successfully booked a ${service} hair cut on ${date.value} at ${time.value}.`;
    display.style.display = "flex";
  });
});

window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  if (loader) loader.style.display = "none";
});
