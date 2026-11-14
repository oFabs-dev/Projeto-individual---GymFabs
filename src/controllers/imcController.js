var imcModel = require("../models/imcModel");

function salvar(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  var imc = req.body.imcServer;

  imcModel
    .salvar(idUsuario, imc)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimo(req, res) {
  var idUsuario = req.params.idUsuario;

  imcModel
    .buscarUltimo(idUsuario)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = { salvar, buscarUltimo };
