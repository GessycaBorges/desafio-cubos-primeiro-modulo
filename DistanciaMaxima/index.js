const input =
`
3
0 0
0 3
4 0
`

const input1 = 
`
5
3.56 17
-5.1 36.3
0.0002 -2
5 5
-9.01 -17.7
`

function processData(input) {
  
    const linhas = input.trim().split("\n");
    const numFuncionarios = Number(linhas[0]);
    const coordenadas = [];
    
    for (let i=1; i<linhas.length; i++){
      const coord = linhas[i].split(" ");
      coordenadas.push({
        x: Number(coord[0]),
        y: Number(coord[1])
      })
    }
    
    let maiorDistancia = 0;
  
    for (let i=0; i<coordenadas.length; i++){
      for (let j=1; j<coordenadas.length; j++){
        let x1 = coordenadas[i].x;
        let x2 = coordenadas[j].x;
        let y1 = coordenadas[i].y;
        let y2 = coordenadas[j].y;
  
        let distancia = Math.sqrt(((x2 - x1 )**2) + ((y2 - y1)**2));
  
        if (distancia > maiorDistancia){
          maiorDistancia = distancia;
        }
      }
  }
  
  console.log(maiorDistancia)
    
}

processData(input) //5.0
processData(input1) //54.141371427033505