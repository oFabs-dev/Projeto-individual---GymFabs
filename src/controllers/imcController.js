var imcModel = require("../models/imcModel");

function salvar(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  var peso = req.body.pesoServer;
  var altura = req.body.alturaServer;
  var imc = req.body.imcServer;

  if (idUsuario == undefined || peso == undefined || altura == undefined || imc == undefined) {
    res.status(400).send("Dados da ficha incompletos!");
    return;
  }

  imcModel
    .salvar(idUsuario, peso, altura, imc)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarFicha(req, res) {
  var idUsuario = req.params.idUsuario;

  imcModel
    .buscarFicha(idUsuario)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = { salvar, buscarFicha };
