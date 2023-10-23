const jogadores = [
    {
      "nome": "Herman",
      "jogada": 1
    },
    {
      "nome": "Rhodes",
      "jogada": 0
    },
    {
      "nome": "Beach",
      "jogada": 0
    },
    {
      "nome": "Laurel",
      "jogada": 0
    },
    {
      "nome": "Beatrice",
      "jogada": 0
    },
    {
      "nome": "Alison",
      "jogada": 0
    },
    {
      "nome": "Saundra",
      "jogada": 0
    },
    {
      "nome": "Klein",
      "jogada": 0
    }
]

function solucao(jogadores) {
  
    function jogadaValida (jogada) {
      
      const ganhador = jogadores.filter ((jogador) => {
        if (jogador.jogada === jogada){
          return jogador;
        }
      });
  
      if (ganhador.length === 1){
        return ganhador[0].nome;
      }
    }
  
    if (jogadaValida(0) === undefined && jogadaValida(1) !== undefined){
      console.log (jogadaValida(1))
    } else if (jogadaValida(1) === undefined && jogadaValida(0) !== undefined){
      console.log (jogadaValida(0))
    } else {
      console.log ("NINGUEM")
    }
    
}

solucao(jogadores)