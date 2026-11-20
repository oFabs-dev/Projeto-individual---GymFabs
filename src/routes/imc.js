var express = require("express");
var router = express.Router();

var imcController = require("../controllers/imcController");

router.post("/salvar", function (req, res) {
  imcController.salvar(req, res);
});

router.get("/ficha/:idUsuario", function (req, res) {
  imcController.buscarFicha(req, res);
});

module.exports = router;
