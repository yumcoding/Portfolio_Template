const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav-container ul li a");
const sections = document.querySelectorAll("section");
const showBtn = document.querySelector(".btn-show");

const toggleBtn = document.querySelector(".nav-toggleBtn");
const menu = document.querySelector(".nav-menu");

//change nav bar text color
function changeNavColor(sectionID, color) {
  navLinks.forEach((link) => {
    if (link.hash === `#${sectionID}`) {
      link.style.color = color;
    }
  });
}

// find which section is in viewport
function findSection() {
  sections.forEach((section) => {
    if (
      window.scrollY >= section.offsetTop &&
      window.scrollY <= section.scrollHeight + section.offsetTop
    ) {
      changeNavColor(section.id, "#318fb5");
    } else {
      changeNavColor(section.id, "#fff");
    }
  });
}

// show nav on scroll
function showNavOnScroll() {
  if (
    document.body.scrollTop > 580 ||
    document.documentElement.scrollTop > 580
  ) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-75px";
  }
}

//smooth scrolling
for (const link of navLinks) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", showNavOnScroll);
window.addEventListener("scroll", findSection);
showBtn.addEventListener("click", clickHandler);

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("active");
});
