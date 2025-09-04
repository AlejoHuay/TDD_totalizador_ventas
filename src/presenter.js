import totalizar from "./totalizador";

const cantidadItems = document.querySelector("#cant-items");
const precioItem = document.querySelector("#precio-item");
const form = document.querySelector("#totalizar-form");
const cantidadDiv = document.querySelector("#cant-div");
const precioDiv = document.querySelector("#precio-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cant = Number.parseInt(cantidadItems.value);
  const precio = Number.parseInt(precioItem.value);
  const ventas = new totalizar(cant,precio);

  cantidadDiv.innerHTML = "<p>Cantidad de items: " + ventas.showCantItems() + "</p>"; 
  precioDiv.innerHTML = "<p>Precio item: " + ventas.showPrizeItem() + "</p>"; 
});
