// botões
const themeBtn = document.querySelector(".lightbulb");
const goalBtn = document.querySelector(".create-button");
const cancelBtn = document.querySelector(".cancel");

// seções
const layout = document.querySelector(".layout");
const overlay = document.querySelector(".overlay");
const editGoal = document.querySelector(".edit-goal");

// dados

// ativa tema escuro
function nightTime() {
  layout.classList.toggle("night-theme");
  document.body.classList.toggle("night-theme");
}

themeBtn.addEventListener("click", nightTime);

// lida com as metas
function addGoal() {}
function toggleEdit() {
  overlay.classList.toggle("hidden");
  editGoal.classList.toggle("hidden");
}

goalBtn.addEventListener("click", toggleEdit);
cancelBtn.addEventListener("click", toggleEdit);
