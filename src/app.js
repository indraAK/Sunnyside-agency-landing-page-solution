const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const header = document.querySelector("header");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");

  if (menuToggle.classList.contains("active")) {
    mobileNav.classList.add("open");
  } else {
    mobileNav.classList.remove("open");
  }
});

window.addEventListener("scroll", () => {
  const { scrollY } = window;
  const headerHeight = header.clientHeight;

  if (scrollY > headerHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

window.addEventListener("resize", () => {
  const mql = matchMedia("(min-width: 768px)");

  if (mql.matches) {
    menuToggle.classList.remove("active");
    mobileNav.classList.remove("open");
  }
});
