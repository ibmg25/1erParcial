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
    expect(cont.encontrarPalabras("HOLA MunDo hola sbshds hola hdeu hde HOLA hdeu")).toEqual(["hola", "mundo", "sbshds", "hdeu", "hde"]);
  });

  it("deberia devolver la cantidad de repeticiones de cada palabra del array anterior, en el mismo orden", () => {
    let cont = new Contador();
    expect(cont.contarTodo("HOLA MunDo hola sbshds hola hdeu hde HOLA hdeu")).toEqual([4, 1, 1, 2, 1]);
  });

  it("deberia pasar el caso de prueba", () => {
    let cont = new Contador();
    expect(cont.contarTodo("El password de mi cuenta es PASSWORD. Es un password de poco cuidado")).toEqual([1, 3, 2, 1, 1, 2, 1, 1, 1]);
  });

});
