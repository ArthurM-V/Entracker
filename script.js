// botões
const themeBtn = document.querySelector(".lightbulb");
const goalBtn = document.querySelector(".create-button");
const cancelBtn = document.querySelector(".cancel");
const salvarBtn = document.querySelector(".salvar");

// seções
const layout = document.querySelector(".layout");
const overlay = document.querySelector(".overlay");
const editGoal = document.querySelector(".edit-goal");
const goalSection = document.querySelector(".goals");

// dados
const goalName = document.getElementById("goal-name");
const goalTime = document.getElementById("goal-time");
const goalColor = document.getElementById("goal-color");

// ativa tema escuro
function nightTime() {
  layout.classList.toggle("night-theme");
  document.body.classList.toggle("night-theme");
}

themeBtn.addEventListener("click", nightTime);

// lida com as metas
function addGoal() {
  const goalie = document.createElement("div");
  const deleteGoal = document.createElement("span");

  goalSection.appendChild(goalie);
  goalie.classList.add("goalie");
  goalie.appendChild(deleteGoal);

  deleteGoal.classList.add("material-symbols-outlined");
  deleteGoal.textContent = "delete";

  deleteGoal.addEventListener("click", () => {
    goalie.remove();
  });
  toggleEdit();
}
function toggleEdit() {
  overlay.classList.toggle("hidden");
  editGoal.classList.toggle("hidden");
}

salvarBtn.addEventListener("click", addGoal);
goalBtn.addEventListener("click", toggleEdit);
cancelBtn.addEventListener("click", toggleEdit);
overlay.addEventListener("click", toggleEdit);
window.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    toggleEdit();
  }
});
