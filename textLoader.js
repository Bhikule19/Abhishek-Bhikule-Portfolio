const text = document.querySelector(".sec-text");

function textLoader() {
  setTimeout(() => {
    text.textContent = "Abhishek";
  }, 0);
  setTimeout(() => {
    text.textContent = " a Front-End Developer";
  }, 4000);
  setTimeout(() => {
    text.textContent = " Blogger";
  }, 8000);
}
textLoader();
setInterval(textLoader, 12000);
