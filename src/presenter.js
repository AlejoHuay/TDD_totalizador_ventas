import totalizar from "./totalizador";

const cantidadItems = document.querySelector("#cant-items");
const precioItem = document.querySelector("#precio-item");
const comboEstados = document.querySelector("#cbx-estados")

const form = document.querySelector("#totalizar-form");

const cantidadDiv = document.querySelector("#cant-div");
const precioDiv = document.querySelector("#precio-div");
const estadoDiv = document.querySelector("#estado-div");
const precioNetoDiv = document.querySelector("#precio-neto-div");
const impuestoDiv = document.querySelector("#impuesto-div")
const descuentoDiv = document.querySelector("#descuento-div")
const precioTotalDiv = document.querySelector("#precio-total-div")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cant = Number.parseInt(cantidadItems.value);
  const precio = Number.parseInt(precioItem.value);
  const estado = comboEstados.value;

  const ventas = new totalizar(cant, precio, estado);

  cantidadDiv.innerHTML = "<p>Cantidad de items: " + ventas.showCantItems() + "</p>"; 
  precioDiv.innerHTML = "<p>Precio por item: " + ventas.showPrizeItem() + "</p>"; 
  estadoDiv.innerHTML = "<p>Codigo de estado: " + ventas.showStateCode() + "</p>"; 
  precioNetoDiv.innerHTML = "<p>Precio Neto: " + ventas.showPrecioNeto() + "$</p>"; 
  impuestoDiv.innerHTML = "<p>Impuesto estado (" + ventas.showStateTaxe() + "% ): " + ventas.showStateTaxeValue() + "$</p>";
  descuentoDiv.innerHTML = "<p>Descuento cantidad (" + ventas.showCantDiscount() + "%): " + ventas.showCantDiscountValue() + "$</p>";
  precioTotalDiv.innerHTML = "<p>Precio total: (+ impuestos - descuento) : " + ventas.showPrecioTotal() + "$</p>"; 
  
});
