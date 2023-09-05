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
}

export default Contador;
