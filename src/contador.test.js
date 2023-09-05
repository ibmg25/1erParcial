import {Contador} from "./contador.js";

describe("Contador de Palabras", () => {
  it("deberia convertir a minusculas", () => {
    let cont = new Contador();
    expect(cont.aMinusculas("HOLA MunDo")).toEqual("hola mundo");
  });

});
