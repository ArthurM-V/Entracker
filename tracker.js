const addGoal = document.getElementById("add-goal");
const goalName = document.getElementById("goal-name");
const goalColor = document.getElementById("goal-color");
const displayGoals = document.querySelector(".display-screen");
const goalDone = document.querySelector(".goal-done");

const modalBtn = document.querySelector(".start-button");
const overlay = document.querySelector(".track-overlay");
const trackWindow = document.querySelector(".track-window");

function createGoal() {
  if (goalName.value == "") {
    alert("Preencha todas informações primeiro!");
  } else {
    goalieConstruction(goalName.value, goalColor.value);

    goalName.value = "";

    goalColor.value = `#000000`;
  }
}

function goalieConstruction(nome, cor) {
  const goalie = document.createElement("div");
  goalie.classList.add("goal-view");

  const title = document.createElement("h2");
  title.textContent = nome;
  const goalTools = document.createElement("div");
  goalTools.classList.add("goal-tools");

  const doneGoal = document.createElement("button");
  doneGoal.classList.add("goal-done");
  const deleteGoal = document.createElement("button");
  deleteGoal.classList.add("goal-delete");

  if (document.querySelectorAll(".goal-view").length >= 7) {
    alert("Limite de metas atingido!");
    addGoal.disabled = true;
  } else {
    addGoal.disabled = false;
    deleteGoal.textContent = "x";
    displayGoals.appendChild(goalie);
    goalie.appendChild(title);
    goalie.appendChild(goalTools);
    goalie.style.borderLeft = `0.35rem solid ${cor}`;
    goalTools.appendChild(doneGoal);
    goalTools.appendChild(deleteGoal);
  }

  deleteGoal.addEventListener("click", () => {
    goalie.remove();
  });
  doneGoal.addEventListener("click", () => {
    nome.strike();
    goalie.style.opacity = "45%";

    doneGoal.style.backgroundColor = `#feb106`;
  });
}

modalBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  trackWindow.classList.add("hidden");
});
addGoal.addEventListener("click", createGoal);
