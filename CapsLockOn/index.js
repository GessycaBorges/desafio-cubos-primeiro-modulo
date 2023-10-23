const texto = "cAPS"
const texto1 = "lock"
const texto2 = "CAPS"

function processData(texto) {
    
    let novaPalavra = texto;
  
    let primeiraParte;
    let segundaParte;
  
    if (texto.slice(1) === (texto.slice(1)).toUpperCase()){
      segundaParte = (texto.slice(1)).toLowerCase();
  
      if (texto.slice(0,1) === (texto.slice(0,1)).toUpperCase()){
        primeiraParte = (texto.slice(0,1)).toLowerCase();
      } else {
        primeiraParte = (texto.slice(0,1)).toUpperCase();
      }
  
      novaPalavra = primeiraParte + segundaParte;
    }
  
  
    console.log (novaPalavra)
}

processData(texto) //Caps
processData(texto1) //lock
processData(texto2) //caps