const express = require("express");
const router = express.Router();
const { obterFilmes } = require("../services/filmesService");

router.get("/", async (_req, res) => {
    try {
        const filmes = await obterFilmes();
        res.status(200).json(filmes);
    } catch (error) {
        console.error("Erro ao buscar filmes:", error);
        res.status(500).json({ mensagem: "Erro interno no servidor." });
    }
});

module.exports = router;
