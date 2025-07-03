function identificarMaiorPremiacao(premios) {
    return premios.reduce(
        (maior, atual) => (atual.relevancia > maior.relevancia ? atual : maior),
        { relevancia: -Infinity }
    ).nome;
}

module.exports = identificarMaiorPremiacao;
