export class Contador{

  aMinusculas(frase){
    return frase.toLowerCase();
  }

  contarRepeticionesPalabra(palabra, frase){
    frase = frase + '.';
    frase = this.aMinusculas(frase);
    let cont = 0, aux = "";
    for(let i = 0; i < frase.length; i++){
      if(frase[i] >= 'a' && frase[i] <= 'z'){
        aux += frase[i];
      }
      else{
        if(aux == palabra){
          cont++;
        }
        aux = "";
      }
    }
    return cont;
  }

  encontrarPalabras(frase){
    frase = frase + '.';
    frase = this.aMinusculas(frase);
    let palabras = [];
    let aux = "";
    for(let i = 0; i < frase.length; i++){
      if(frase[i] >= 'a' && frase[i] <= 'z'){
        aux += frase[i];
      }
      else{
        if(aux.length >= 1){
          let yaEsta = false;
          for(let j = 0; j < palabras.length; j++){
            if(palabras[j] == aux)
              yaEsta = true;
          }
          if (yaEsta == false){
            let pos = palabras.length;
            palabras[pos] = aux;
          }
        }
        aux = "";
      }
    }
    return palabras.length;
  }

}

export default Contador;
