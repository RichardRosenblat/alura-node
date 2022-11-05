import express from "express";

const app = express();

app.use(express.json());

const livros = [
    { id: 1, titulo: "livro 1" },
    { id: 2, titulo: "livro 2" },
];

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
    const { id } = req.params;
    const index = buscaLivro(id);
    if (index === -1) {
        res.status(404).send("Livro não encontrado");
    } else {
        res.status(200).json(livros[index]);
    }
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(200).json(livros);
});

app.put("/livros/:id", (req, res) => {
    const { id } = req.params;
    const index = buscaLivro(id);
    if (index === -1) {
        res.status(404).send("Livro não encontrado");
    } else {
        livros[index].titulo = req.body.titulo;
        res.status(200).json(livros);
    }
});

app.delete("/livros/:id", (req, res) => {
    const { id } = req.params;
    const index = buscaLivro(id);
    if (index === -1) {
        res.status(404).send("Livro não encontrado");
    } else {
        livros.splice(index, 1);
        res.status(200).json(livros);
    }
});

function buscaLivro(id) {
    return livros.findIndex((livro) => livro.id == id);
}

export default app;
