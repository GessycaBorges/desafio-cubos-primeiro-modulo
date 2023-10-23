const texto = "Um texto qualquer"
const texto1 = "Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer "

function contador (texto) {
    let novoTexto = texto.trim();

    novoTexto = novoTexto.split(" ");

    const textoFinal = novoTexto.filter ((palavra) => {
    if (palavra !== " "){
        return palavra;
    }
    })

    console.log (textoFinal.length); 
}

contador (texto) //3
contador (texto1) //14
