var database = require("../database/config");

// Cria a ficha se o usuário ainda não tem; se já tem, só atualiza (1-1).
function salvar(idUsuario, peso, altura, imc) {
  var instrucaoSql = `
    INSERT INTO ficha_fisica (fk_usuario, peso, altura, imc)
    VALUES (${idUsuario}, ${peso}, ${altura}, ${imc})
    ON DUPLICATE KEY UPDATE
      peso = VALUES(peso),
      altura = VALUES(altura),
      imc = VALUES(imc);
  `;
  return database.executar(instrucaoSql);
}

function buscarFicha(idUsuario) {
  var instrucaoSql = `
    SELECT peso, altura, imc, DATE_FORMAT(dt_atualizacao, '%d/%m') AS dia
    FROM ficha_fisica
    WHERE fk_usuario = ${idUsuario};
  `;
  return database.executar(instrucaoSql);
}

module.exports = { salvar, buscarFicha };
