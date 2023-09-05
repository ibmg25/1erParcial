import {Contador} from "./contador.js";

describe("Contador de Palabras", () => {
  it("deberia convertir a minusculas", () => {
    let cont = new Contador();
    expect(cont.aMinusculas("HOLA MunDo")).toEqual("hola mundo");
  });

  it("deberia contar las repeticiones de una palabra en una frase", () => {
    let cont = new Contador();
    expect(cont.contarRepeticionesPalabra("hola", "HOLA MunDo hola sbshds hola hdeu hde HOLA")).toEqual(4);
  });

});
