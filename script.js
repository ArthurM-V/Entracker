const themeBtn = document.querySelector(".material-symbols-outlined");
const layout = document.querySelector(".layout");

function nightTime() {
  layout.classList.toggle("night-theme");
  document.body.classList.toggle("night-theme");
}

themeBtn.addEventListener("click", nightTime);
