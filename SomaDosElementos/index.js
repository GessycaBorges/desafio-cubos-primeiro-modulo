const lista = [1, 2, 3, 4];

const somaDosElementos = lista.reduce((acumulador, itemAtual) => {
    return acumulador + itemAtual;
});

console.log (somaDosElementos); //10