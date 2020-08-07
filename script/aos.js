// animation on scrolling

const sectionTitle = document.querySelectorAll(".section-title");
const bottomLine = document.querySelectorAll(".bottom-line");
const sectionDes = document.querySelectorAll(".section-description");
const specialIcon = document.querySelectorAll(".special-icon");
const specialContent = document.querySelectorAll(".special-content");

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

function run() {
  sectionTitle.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("slide-in-left");
    }
  });
  bottomLine.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("slide-in-left-delay");
    }
  });
  sectionDes.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("fade-in");
    }
  });
  specialIcon.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("flipX");
    }
  });
  specialContent.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("fade-in");
    }
  });
}

// Events
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);
