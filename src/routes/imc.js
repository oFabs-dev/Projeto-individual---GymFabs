var express = require("express");
var router = express.Router();

var imcController = require("../controllers/imcController");

router.post("/salvar", function (req, res) {
  imcController.salvar(req, res);
});

router.get("/ultimo/:idUsuario", function (req, res) {
  imcController.buscarUltimo(req, res);
});

module.exports = router;
