var partidaModel = require("../models/partidaModel");

function salvar(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  var score = req.body.scoreServer;

  partidaModel
    .salvar(idUsuario, score)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = { salvar, buscarKpis, buscarUltimas, buscarMelhores};


function buscarKpis(req, res) {
  var idUsuario = req.params.idUsuario;

  partidaModel
    .buscarKpis(idUsuario)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}


function buscarUltimas(req, res) {
  var idUsuario = req.params.idUsuario;

  partidaModel
    .buscarUltimas(idUsuario)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarMelhores(req, res) {          
  var idUsuario = req.params.idUsuario;

  partidaModel
    .buscarMelhores(idUsuario)              
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}