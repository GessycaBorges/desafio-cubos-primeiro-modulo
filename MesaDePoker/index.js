const min = 2;
const max = 10;
const valores = [0, 5, 6, 10, 11];

const min1 = 1;
const max1 = 1;
const valores1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mesaDePoker = (arrayValores, valorMinimo, valorMaximo) => {
    
    const permitidos = arrayValores.filter((valor) => {
      return valor >= valorMinimo && valor <= valorMaximo;
    });
    
    return permitidos;
};
  
console.log (mesaDePoker (valores, min, max)) //[ 5, 6, 10 ]
console.log (mesaDePoker (valores1, min1, max1)) //[ 1 ]