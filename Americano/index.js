const numeros = [1, 3, 2, 1];
const numeros1 = [1, 1, 1];

function solucao(numeros) {
  
  const somaS = numeros.reduce((acumulador, itemAtual) => {
    acumulador += itemAtual;
    return acumulador;
  });
  
  let posicaoX;
  
  if (somaS % numeros.length !== 0){
      posicaoX = somaS % numeros.length;
  } else {
    posicaoX = numeros.length;
  }
  
  console.log (posicaoX);
    
}

solucao(numeros) //3
solucao(numeros1) //3