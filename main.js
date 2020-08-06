const nav = document.getElementById("nav");

// show nav on scroll
window.onscroll = function () {
  scrollFunction();
};

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
