const input = 
`
cubos
cuggbyos
`

const input1 = 
`
cubos
ewvelrabsocaeln
`

function processData(input) {
        
    const entradas = input.trim().split("\n")
    
    const senhaCorreta = entradas[0];
    let palavraDigitada = entradas[1];
  
    let senhaOculta = "";
    let indice = 0;
  
    for (i=0; i<senhaCorreta.length; i++){
      if (palavraDigitada.includes(senhaCorreta[i])){
        senhaOculta += senhaCorreta[i];
        indice = palavraDigitada.indexOf(senhaCorreta[i]);
        palavraDigitada = palavraDigitada.slice(indice);
      }
    }
  
    if (senhaOculta === senhaCorreta) {
      console.log ("SIM");
    } else{
      console.log ("NAO")
    }
}

processData(input) //SIM
processData(input1) //NAO