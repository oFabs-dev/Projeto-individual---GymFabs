var database = require("../database/config");

function salvar(idUsuario, imc) {
  var instrucaoSql = `
    INSERT INTO registro_imc (fk_usuario, imc) VALUES (${idUsuario}, ${imc});
  `;
  return database.executar(instrucaoSql);
}

function buscarUltimo(idUsuario) {
  var instrucaoSql = `
    SELECT imc, DATE_FORMAT(dt_registro, '%d/%m') AS dia
    FROM registro_imc
    WHERE fk_usuario = ${idUsuario}
    ORDER BY dt_registro DESC, id DESC
    LIMIT 1;
  `;
  return database.executar(instrucaoSql);
}

module.exports = { salvar, buscarUltimo };
