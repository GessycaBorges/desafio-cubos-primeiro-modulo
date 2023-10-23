const precos = [150, 50]
const precos1 = [100, 100, 100]
const precos2 = [200, 150, 50, 100]

function solucao(precos) {
  
    const soma = precos.reduce((acumulador, itemAtual) => {
      acumulador += itemAtual;
      return acumulador;
    });
  
    if (precos.length < 3){
      console.log(soma);
    } else {
      const maisBarato = precos.reduce((acumulador, itemAtual) => {
        if (acumulador > itemAtual){
          acumulador = itemAtual;
        }
        return acumulador;
      });
  
      const valorComDesconto = soma - (maisBarato*0.5)
  
      console.log (valorComDesconto);
    }
    
}

  solucao(precos) //200
  solucao(precos1) //250
  solucao(precos2) //475