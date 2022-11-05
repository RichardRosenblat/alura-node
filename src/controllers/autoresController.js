import autores from "../models/Autor.js";

class AutoresController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        });
    };

    static listarAutorPorId = (req, res) => {
        const { id } = req.params;

        autores.findById(id, (err, autores) => {
            if (err) {
                res.status(400).send({ message: `Id do autor não localizado: ${err.message}` });
            } else {
                res.status(200).json(autores);
            }
        });
    };

    static cadastrarAutor = (req, res) => {
        const autor = new autores(req.body);

        autor.save((err) => {
            if (err) {
                res.status(500).send({ message: `Falha ao cadastrar autor: ${err.message}` });
            } else {
                res.status(201).send(autor.toJSON());
            }
        });
    };

    static atualizarAutor = (req, res) => {
        const { id } = req.params;

        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Autor atualizado com sucesso" });
            } else {
                res.status(500).send({ message: `Falha ao atualizar autor: ${err.message}` });
            }
        });
    };

    static excluirAutor = (req, res) => {
        const { id } = req.params;

        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Autor excluido  com sucesso" });
            } else {
                res.status(500).send({ message: `Falha ao excluir autor: ${err.message}` });
            }
        });
    };
}

export default AutoresController;
