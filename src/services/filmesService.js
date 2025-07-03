const axios = require("axios");
const calcularLucro = require("../utils/lucro");
const identificarMaiorPremiacao = require("../utils/premios");
const obterSinopse = require("../utils/sinopse");
require("dotenv").config();

const BASE_URL = process.env.BASE_URL;

async function obterFilmes() {
    const response = await axios.get(BASE_URL);
    return response.data.filmes.map((filme) => ({
        titulo: filme.titulo,
        ano: filme.ano,
        diretor: filme.diretor,
        genero: filme.genero,
        duracaoSegundos: filme.duracao * 60,
        notaIMDb: filme.ratings.find((r) => r.fonte === "IMDb").valor,
        lucro: calcularLucro(filme.orcamento, filme.bilheteria),
        maiorPremiacao: identificarMaiorPremiacao(filme.premios),
        sinopse: obterSinopse(filme.sinopse),
    }));
}

module.exports = { obterFilmes };
