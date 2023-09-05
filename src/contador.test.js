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

  it("deberia devolver la cantidad de palabras diferentes en una frase", () => {
    let cont = new Contador();
    expect(cont.encontrarPalabras("HOLA MunDo hola sbshds hola hdeu hde HOLA")).toEqual(["hola", "mundo", "sbshds", "hdeu", "hde"]);
  });

});
