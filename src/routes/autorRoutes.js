import express from "express";
import AutoresController from "../controllers/autoresController.js";

const autoresRouter = express.Router();

autoresRouter.get("/autores", AutoresController.listarAutores);
autoresRouter.get("/autores/:id", AutoresController.listarAutorPorId);
autoresRouter.post("/autores", AutoresController.cadastrarAutor);
autoresRouter.put("/autores/:id", AutoresController.atualizarAutor);
autoresRouter.delete("/autores/:id", AutoresController.excluirAutor);

export default autoresRouter;
