const nav = document.getElementById("nav");

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
