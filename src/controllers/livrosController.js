import livros from "../models/Livro.js";

class LivroController {
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros);
        });
    };

    static listarLivroPorId = (req, res) => {
        const { id } = req.params;

        livros.findById(id, (err, livros) => {
            if (err) {
                res.status(400).send({ message: `Id do livro não localizado: ${err.message}` });
            } else {
                res.status(200).json(livros);
            }
        });
    };

    static cadastrarLivro = (req, res) => {
        const livro = new livros(req.body);

        livro.save((err) => {
            if (err) {
                res.status(500).send({ message: `Falha ao cadastrar livro: ${err.message}` });
            } else {
                res.status(201).send(livro.toJSON());
            }
        });
    };

    static atualizarLivro = (req, res) => {
        const { id } = req.params;

        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Livro atualizado com sucesso" });
            } else {
                res.status(500).send({ message: `Falha ao atualizar livro: ${err.message}` });
            }
        });
    };

    static excluirLivro = (req, res) => {
        const { id } = req.params;

        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Livro excluido  com sucesso" });
            } else {
                res.status(500).send({ message: `Falha ao excluir livro: ${err.message}` });
            }
        });
    };
}

export default LivroController;