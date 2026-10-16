// Practice settings — update these in one place and every page picks them up.
const PRACTICE = {
  // Your Jane clinic URL (shown in Jane under Settings > Online Booking).
  janeUrl: "https://leappediatrictherapy.janeapp.com",
};

document.querySelectorAll("[data-jane]").forEach((link) => {
  const path = link.getAttribute("data-jane") || "";
  link.href = PRACTICE.janeUrl + path;
  link.target = "_blank";
  link.rel = "noopener";
});

const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
