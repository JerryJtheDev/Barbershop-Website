let scrollTimer: ReturnType<typeof window.setTimeout> | undefined;

function configureImageSliders(): void {
  document.querySelectorAll<HTMLElement>(".services-section1 .card, .services-section2 .card").forEach((card) => {
    const images = Array.from(card.querySelectorAll<HTMLImageElement>("img"));
    if (images.length < 2) return;

    let currentIndex = 0;
    images.forEach((image, index) => { image.style.display = index === 0 ? "block" : "none"; });
    window.setInterval(() => {
      images[currentIndex].style.display = "none";
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].style.display = "block";
    }, 10_000);
  });
}

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

  const firstSection = document.querySelector<HTMLElement>(".services-section1");
  const secondSection = document.querySelector<HTMLElement>(".services-section2");
  document.querySelector(".next")?.addEventListener("click", () => {
    if (firstSection) firstSection.style.display = "none";
    if (secondSection) secondSection.style.display = "flex";
  });
  document.querySelector(".prev")?.addEventListener("click", () => {
    if (firstSection) firstSection.style.display = "flex";
    if (secondSection) secondSection.style.display = "none";
  });

  document.querySelectorAll<HTMLAnchorElement>(".book-service").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const service = link.dataset.service;
      if (!service) return;
      localStorage.setItem("selectedService", service);
      window.location.href = "../HTML/booking.html";
    });
  });
  configureImageSliders();
});

window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  if (loader) loader.style.display = "none";
});
