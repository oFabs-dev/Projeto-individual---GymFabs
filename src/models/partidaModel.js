
var database = require("../database/config");

function salvar(idUsuario, score) {
  var instrucaoSql = `
    INSERT INTO partida (fk_usuario, score) VALUES (${idUsuario}, ${score});
  `;
  return database.executar(instrucaoSql);
}

module.exports = { salvar, buscarKpis, buscarUltimas, buscarMelhores};




function buscarKpis(idUsuario) {
  var instrucaoSql = `
    SELECT MAX(score) AS recorde,
           ROUND(AVG(score)) AS media,
           COUNT(*) AS partidas
    FROM partida
    WHERE fk_usuario = ${idUsuario};
  `;
  return database.executar(instrucaoSql);
}



function buscarUltimas(idUsuario) {
  var instrucaoSql = `
    SELECT score FROM partida
WHERE fk_usuario = ${idUsuario}
ORDER BY dt_partida DESC
LIMIT 10;
  `;
  return database.executar(instrucaoSql);
}


function buscarMelhores(idUsuario) {
  var instrucaoSql = `
    SELECT score, DATE_FORMAT(dt_partida, '%d/%m') AS dia
    FROM partida
    WHERE fk_usuario = ${idUsuario}
    ORDER BY score DESC
    LIMIT 5;
  `;
  return database.executar(instrucaoSql);
}