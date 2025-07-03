function calcularLucro(orcamento, bilheteria) {
    let orcamentoValor = parseFloat(orcamento.replace(/\$| milhões| bilhões?/g, ""));
    let bilheteriaValor = parseFloat(bilheteria.replace(/\$| milhões| bilhões?/g, ""));

    orcamentoValor *= orcamento.includes("bilhão") ? 1e9 : 1e6;
    bilheteriaValor *= bilheteria.includes("bilhão") ? 1e9 : 1e6;

    const lucro = bilheteriaValor - orcamentoValor;

    return Math.abs(lucro) >= 1e9
        ? `$${(lucro / 1e9).toFixed(1)} bilhões`
        : `$${(lucro / 1e6).toFixed(1)} milhões`;
}

module.exports = calcularLucro;
