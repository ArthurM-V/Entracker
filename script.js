const tipoAparelho = document.querySelector("#aparelho");
const potencia = document.querySelector("#potencia");
const horasDia = document.querySelector("#horasDia");
const horasMes = document.querySelector("#horasMes");
const tarifa = document.querySelector("#tarifa");
const calcula = document.querySelector("#calcula");
const tableInfo = document.querySelector(".table");

function calcCost() {
  let result = 0;
  let potenciaWatts = 0;

  const calcHoras = ajustaTempo(horasDia.value);

  potenciaWatts = (potencia.value * calcHoras * horasMes.value) / 1000;
  result = potenciaWatts * tarifa.value;

  if (
    potencia.value == "" &&
    horasDia.value == "" &&
    horasMes.value == "" &&
    tarifa.value == ""
  ) {
    alert("Preencha todos as informações!");

    clearInfo();
  } else {
    const row = document.createElement("tr");

    const data = [
      tipoAparelho.value,
      potencia.value,
      horasDia.value,
      potenciaWatts.toFixed(3).toString().replace(".", ",") + " kWh",
      result.toFixed(2).toString().replace(".", ",") + "R$",
    ];

    data.forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      cell.classList.add("td");
      row.appendChild(cell);
    });

    tableInfo.appendChild(row);

    document.querySelector(".calc-res").classList.remove("hidden");
    clearInfo();
  }
}

function clearInfo() {
  tipoAparelho.value = "";
  tipoAparelho.textContent = "";

  potencia.value = "";
  potencia.textContent = "";

  horasDia.value = "";
  horasDia.textContent = "";

  horasMes.value = "";
  horasMes.textContent = "";

  tarifa.value = "";
  horasDia.textContent = "";

  potenciaWatts = 0;

  result = 0;
}

function ajustaTempo(tempo) {
  return tempo
    .split(":")
    .map(function (val) {
      return parseInt(val, 10);
    })
    .reduce(function (previousValue, currentValue, index, array) {
      return previousValue + currentValue / Math.pow(60, index);
    });
}

calcula.addEventListener("click", calcCost);
