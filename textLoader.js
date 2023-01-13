const text = document.querySelector(".sec-text");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden ");
hiddenElements.forEach((el) => observer.observe(el));

function textLoader() {
  setTimeout(() => {
    text.textContent = "Abhishek";
  }, 0);
  setTimeout(() => {
    text.textContent = " अभिषेक ";
  }, 4000);
  setTimeout(() => {
    text.textContent = "a Developer";
  }, 8000);
}
textLoader();
setInterval(textLoader, 12000);
