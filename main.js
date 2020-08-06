const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav-container ul li a");

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
