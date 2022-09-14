const express = require("express");
const router = express.Router();

// CRUD

// CREATe - criando um produto
router.post("/", (req, res) => {console.log("POST", req.body)});

// READ - pegando os produtos 
router.get("/", (req, res) => {console.log("GET 1", req.query, req.baseUrl, req.url)});

// READ - pegando um produtos 
router.get("/:id", (req, res) => {console.log("GET2", req.params)});

// UPDATE - Atualizando um produto (total)
router.put("/:id", (req, res) => {console.log("PUT", req.params)});

// UPDATE - Atualizando um produto (parcial)
router.patch("/:id", (req, res) => {console.log("PATCH", req.params)});

// DELETE
router.delete("/:id", (req, res) => {console.log("DELETE", req.params)});

module.exports = router;