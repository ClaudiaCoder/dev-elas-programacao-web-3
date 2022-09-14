//importando modulos

const express = require("express");
const app = express();
const { PORT } = require("dotenv").config().parsed;

//Ativando middlewares
app.use(express.json());

// Rotas
const productsRouter = require("../routes/productsRouter");
app.use("/products", productsRouter);

//inicializando a aplicacao
app.listen(PORT, console.log(` Server running at port ${PORT}`));