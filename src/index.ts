let scrollTimer: ReturnType<typeof window.setTimeout> | undefined;

function setNavbarScrollState(): void {
  const navbar = document.querySelector<HTMLElement>(".navbar");
  if (!navbar) return;

  navbar.style.backgroundColor = "black";
  if (scrollTimer) window.clearTimeout(scrollTimer);
  scrollTimer = window.setTimeout(() => {
    navbar.style.backgroundColor = "transparent";
  }, 200);
}

function rotateLandingImage(): void {
  const images = Array.from(document.querySelectorAll<HTMLImageElement>(".landing-page img"));
  const currentImage = document.querySelector<HTMLImageElement>(".landing-page img.current");
  if (!currentImage || images.length < 2) return;

  const nextImage = images[(images.indexOf(currentImage) + 1) % images.length];
  currentImage.classList.replace("current", "previous");
  nextImage.style.opacity = "0";
  nextImage.classList.add("current");

  window.setTimeout(() => {
    nextImage.style.opacity = "1";
    currentImage.classList.remove("previous");
  }, 1_000);
}

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector<HTMLElement>(".hamburger");
  const navMenu = document.querySelector<HTMLElement>(".nav-menu");
  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu?.classList.toggle("active");
  });

  window.addEventListener("scroll", setNavbarScrollState);
  window.setInterval(rotateLandingImage, 10_000);
});

window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  if (loader) loader.style.display = "none";
});
