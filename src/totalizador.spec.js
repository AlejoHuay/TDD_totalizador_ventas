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

});