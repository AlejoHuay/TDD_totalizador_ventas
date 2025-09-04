import totalizar from "./totalizador";

const items = document.querySelector("#cant-items");
//const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cant = Number.parseInt(items.value);
  const ventas = new totalizar(cant);
  //const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + ventas.showCantItems() + "</p>";
});
