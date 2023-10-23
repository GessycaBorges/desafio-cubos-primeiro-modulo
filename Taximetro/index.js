const min = 25
const km = 11.5

function solucao(min, km) {
  
    function calcularValorAPagar (xMin, xKm){
  
      let valorAPagarMin;
      let valorAPagarKm;
  
      if (min < xMin){
        valorAPagarMin = 50 * min;
      } else {
        valorAPagarMin = (50 * xMin) + (30 * (min - xMin));
      }
  
      if (km < xKm){
        valorAPagarKm = 70 * km;
      } else {
        valorAPagarKm = (70 * xKm) + (50 * (km - xKm));
      }
  
      return valorAPagarMin + valorAPagarKm;
    }
  
    console.log (calcularValorAPagar (20, 10));
}

solucao(min, km)  //1925