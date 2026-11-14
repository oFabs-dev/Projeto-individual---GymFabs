var express = require("express");
var router = express.Router();

var partidaController = require("../controllers/partidaController");

router.post("/salvar", function (req, res) {
  partidaController.salvar(req, res);
});

module.exports = router;

router.get("/kpis/:idUsuario", function (req, res) {
  partidaController.buscarKpis(req, res);
});


router.get("/ultimas/:idUsuario", function (req, res) {
  partidaController.buscarUltimas(req, res);
});

router.get("/melhores/:idUsuario", function (req, res) {
  partidaController.buscarMelhores(req, res);
});