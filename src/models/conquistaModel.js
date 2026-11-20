var database = require("../database/config");

function buscarAlcancadas(score) {
  var instrucaoSql = `
    SELECT id FROM conquista
    WHERE pontos_minimos <= ${score};
  `;
  return database.executar(instrucaoSql);
}


function registrar(idUsuario, idConquista) {
  var instrucaoSql = `
    INSERT IGNORE INTO usuario_conquista (fk_usuario, fk_conquista)
    VALUES (${idUsuario}, ${idConquista});
  `;
  return database.executar(instrucaoSql);
}