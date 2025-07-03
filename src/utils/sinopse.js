function obterSinopse(sinopses) {
    const pt = sinopses.find((s) => s.idioma === "pt-br");
    const en = sinopses.find((s) => s.idioma === "en");
    return pt ? pt.texto : en ? en.texto : sinopses[0].texto;
}

module.exports = obterSinopse;
