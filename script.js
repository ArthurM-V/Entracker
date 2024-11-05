const tipoAparelho = document.querySelector("#aparelho");
const potencia = document.querySelector("#potencia");
const horasDia = document.querySelector("#horasDia");
const tarifa = document.querySelector("#tarifa");
const calcula = document.querySelector("#calcula");
const tableInfo = document.querySelector(".table");
let data = [];

function calcCost() {
  let result = 0;
  let potenciaWatts = 0;
  result = ((potencia.value * horasDia.value) / 1000) * tarifa.value;
  potenciaWatts = (potencia.value * horasDia.value) / 1000;

  if ((potencia.value == "") & (horasDia.value == "") & (tarifa.value == "")) {
    alert("Preencha todos as informações!");

    potencia.value = "";
    potencia.textContent = "";

    horasDia.value = "";
    horasDia.textContent = "";

    tarifa.value = "";
    horasDia.textContent = "";
  } else {
    data.push(tipoAparelho.value);
    data.push(potencia.value);
    data.push(horasDia.value);
    data.push(potenciaWatts);
    data.push(result);

    for (let i = 0; i < 1; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < data.length; j++) {
        const cell = document.createElement("td");
        cell.textContent = data[j];
        cell.classList.add("td");

        row.appendChild(cell);
      }
      tableInfo.appendChild(row);
    }
    tableInfo.classList.remove("hidden");

    potencia.value = "";
    potencia.textContent = "";

    horasDia.value = "";
    horasDia.textContent = "";

    tarifa.value = "";
    horasDia.textContent = "";
  }
}

calcula.addEventListener("click", calcCost);
window.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    tableInfo.classList.toggle("hidden");
  }
});
