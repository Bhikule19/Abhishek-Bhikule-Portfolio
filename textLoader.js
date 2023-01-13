const text = document.querySelector(".sec-text");

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
