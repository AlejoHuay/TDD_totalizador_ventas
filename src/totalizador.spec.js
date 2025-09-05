import totalizar from "./totalizador.js";

describe("Totalizar", () => {

  it("Deberia ingresar y mostrar Cantidad de items", () => {
    const ventas = new totalizar(2);
    expect(ventas.showCantItems()).toEqual(2);
  });

  it("Deberia Ingresar y mostrar Precio por item", () => {
    const ventas = new totalizar(2, 4);
    expect(ventas.showPrizeItem()).toEqual(4);
  });

  it("Deberia Ingresar y mostrar Código de estado", () => {
    const ventas = new totalizar(2, 4, "CA");
    expect(ventas.showStateCode()).toEqual("CA");
  });

  it("Deberia Mostrar el precio neto apretando el botón 'Totalizar'", () => {
    const ventas = new totalizar(2, 4, "CA");
    expect(ventas.showPrecioNeto()).toEqual(8);
  });

  it("Deberia Mostrar el porcentaje de impuesto que tiene el estado ingresado", () => {
    const ventas = new totalizar(2, 4, "CA");
    expect(ventas.showStateTaxe()).toEqual(8.25);
  });

  it("Deberia Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de CA", () => {
    const ventas = new totalizar(2, 4, "CA");
    expect(ventas.showPrecioTotal()).toEqual(8.66);
  });

  it("Deberia Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de AL", () => {
    const ventas = new totalizar(2, 4, "AL");
    expect(ventas.showPrecioTotal()).toEqual(8.32);
  });

  it("Deberia Mostrar el precio total del impuesto según el precio neto y el porcentaje de NV", () => {
    const ventas = new totalizar(2, 4, "NV");
    expect(ventas.showPrecioTotal()).toEqual(8.64);
  });

  it("Deberia Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de UT", () => {
    const ventas = new totalizar(2, 4, "UT");
    expect(ventas.showPrecioTotal()).toEqual(8.532);
  });

  it("Deberia Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de TX", () => {
    const ventas = new totalizar(2, 4, "TX");
    expect(ventas.showPrecioTotal()).toEqual(8.5);
  });

  it("Deberia Mostrar el precio total con el Porcentaje de descuento que corresponde a 1000", () => {
    const ventas = new totalizar(1000, 4, "TX");
    expect(ventas.showPrecioTotal()).toEqual(4130);
  });

  it("Deberia Mostrar el precio total con el Porcentaje de descuento que corresponde a 3000", () => {
    const ventas = new totalizar(3000, 4, "TX");
    expect(ventas.showPrecioTotal()).toEqual(12150);
  });

  it("Deberia Mostrar el precio total con el Porcentaje de descuento que corresponde a 7000", () => {
    const ventas = new totalizar(7000, 4, "TX");
    expect(ventas.showPrecioTotal()).toEqual(27790);
  });

  it("Deberia Mostrar el precio total con el Porcentaje de descuento que corresponde a 10000", () => {
    const ventas = new totalizar(10000, 4, "TX");
    expect(ventas.showPrecioTotal()).toEqual(38500);
  });

  it("Deberia Mostrar el precio total con el Porcentaje de descuento que corresponde a 30000", () => {
    const ventas = new totalizar(30000, 4, "TX");
    expect(ventas.showPrecioTotal()).toEqual(109500);
  });

});