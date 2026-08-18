const openBtn = document.getElementById("menuOpenBtn");
const closeBtn = document.getElementById("menuCloseBtn");
const menu = document.getElementById("mobileMenu");
const backdrop = document.getElementById("menuBackdrop");

function openMenu() {
  menu.classList.remove("-translate-x-[calc(100%+var(--menu-offset))]");
  menu.removeAttribute("inert");
  backdrop.classList.remove("opacity-0", "pointer-events-none");
  backdrop.classList.add("opacity-100");
  document.body.classList.add("overflow-hidden");
}

function closeMenu() {
  menu.classList.add("-translate-x-[calc(100%+var(--menu-offset))]");
  menu.setAttribute("inert", "");
  backdrop.classList.add("opacity-0", "pointer-events-none");
  backdrop.classList.remove("opacity-100");
  document.body.classList.remove("overflow-hidden");
}

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);

const allNavLinks = document.querySelectorAll(".mobile-nav-link, .nav-link");

allNavLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (link.classList.contains("mobile-nav-link")) {
      closeMenu();
      setTimeout(() => {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
