const lista = [2, 3, 4];

const somaDosElementos = lista.reduce((acumulador, itemAtual) => {
    return acumulador + itemAtual;
  });
  
  const mediaAritmetica = somaDosElementos / lista.length
  
  console.log (mediaAritmetica); //3