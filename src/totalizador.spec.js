import totalizar from "./totalizador.js";

describe("Totalizar", () => {

  it("Deberia ingresar y mostrar Cantidad de items", () => {
    const ventas = new totalizar(2);
    expect(ventas.showCantItems()).toEqual(2);
  });
  
});