const carta = "Q";

const truco = [
    { cartaParaCima: "Q", manilha: "J"},
    { cartaParaCima: "J", manilha: "K"},
    { cartaParaCima: "K", manilha: "A"},
    { cartaParaCima: "A", manilha: "2"},
    { cartaParaCima: "2", manilha: "3"},
    { cartaParaCima: "3", manilha: "Q"},
];
  
const verificarManilha = truco.find((arrayCartas) => {
  return arrayCartas.cartaParaCima === carta;
});
  
console.log (verificarManilha.manilha); //J