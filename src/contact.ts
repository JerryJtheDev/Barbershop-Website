interface EmailJs {
  init(publicKey: string): void;
  send(serviceId: string, templateId: string, parameters: Record<string, string>): Promise<unknown>;
}

declare const emailjs: EmailJs;

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

  const form = document.querySelector<HTMLFormElement>("form");
  const name = document.querySelector<HTMLInputElement>("#Name");
  const email = document.querySelector<HTMLInputElement>("#email");
  const message = document.querySelector<HTMLTextAreaElement>("#message");
  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!name || !email || !message) return;
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email.value)) {
      alert("Please enter a valid Gmail address.");
      return;
    }

    try {
      emailjs.init("_WnrWch_sOW9D93rs");
      await emailjs.send("service_oevbe2h", "template_ynm7b79", { name: name.value, email: email.value, message: message.value });
      alert("Email sent successfully!");
    } catch {
      alert("Failed to send email. Please try again.");
    }
  });
});

window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  if (loader) loader.style.display = "none";
});
