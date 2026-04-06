const bar = document.getElementById("floating-bar");
const footer = document.querySelector("footer");

function handleScroll() {
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop <= windowHeight) {
    bar.style.zIndex = "0"
  } else {
    bar.style.zIndex = "999"
  }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);