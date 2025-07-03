const express = require("express");
const filmesRouter = require("./routes/filmes");
require("dotenv").config();

const server = express();
const PORT = process.env.PORT || 3000;

server.use("/filmes", filmesRouter);

server.listen(PORT, () => {
    console.log(`Servidor está funcionando na porta ${PORT}.`);
});
