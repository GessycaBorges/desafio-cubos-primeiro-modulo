const lista = [12, 18, 27];

const temMaiorDeIdade = lista.some((numero) => {
  return numero > 18;
});

if (!temMaiorDeIdade){
    console.log ("CRESCA E APARECA");
} else {
    const maioresDeIdade = lista.filter ((numero) => {
        if (numero >= 18){
            return numero;
        }
    })

    const caculaDosAdultos = maioresDeIdade.reduce ((acumulador, valorAtual) => {
      if (acumulador > valorAtual){
        acumulador = valorAtual;
      }
      return acumulador;
    });
    
    console.log (caculaDosAdultos);
}

//18