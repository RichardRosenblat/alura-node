import express from "express";
import LivroController from "../controllers/livrosController.js";

const livrosRouter = express.Router();

livrosRouter.get("/livros", LivroController.listarLivros);
livrosRouter.get("/livros/busca", LivroController.listarLivroPorEditora);
livrosRouter.get("/livros/:id", LivroController.listarLivroPorId);
livrosRouter.post("/livros", LivroController.cadastrarLivro);
livrosRouter.put("/livros/:id", LivroController.atualizarLivro);
livrosRouter.delete("/livros/:id", LivroController.excluirLivro);

export default livrosRouter;
