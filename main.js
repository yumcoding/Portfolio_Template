const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav-container ul li a");
const sections = document.querySelectorAll("section");

// navbar text color change
function navColorChange(e) {
  sections.forEach((section) => {
    if (
      window.scrollY >= section.offsetTop - 100 &&
      window.scrollY <= section.scrollHeight + section.offsetTop
    ) {
      const sectionID = section.id;
      navLinks.forEach((link) => {
        if (link.hash === `#${sectionID}`) {
          link.style.color = "#318fb5";
        }
      });
    } else {
      const sectionID = section.id;
      navLinks.forEach((link) => {
        if (link.hash === `#${sectionID}`) {
          link.style.color = "#fff";
        }
      });
    }
  });
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

// show nav on scroll
function scrollFunction() {
  if (
    document.body.scrollTop > 580 ||
    document.documentElement.scrollTop > 580
  ) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-75px";
  }
}

window.addEventListener("scroll", scrollFunction);
window.addEventListener("scroll", navColorChange);
