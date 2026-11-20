-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE gymfabs;

USE gymfabs;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) UNIQUE,
	senha VARCHAR(50)
);

CREATE TABLE partida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	fk_usuario INT NOT NULL,
	score INT NOT NULL,
	dt_partida DATETIME DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_partida_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);



-- Relacionamento 1-1: cada usuário tem no máximo UMA ficha física.
-- A PK é a própria FK, então o banco não deixa existir duas fichas para o mesmo usuário.
CREATE TABLE ficha_fisica (
	fk_usuario INT PRIMARY KEY,
	peso DECIMAL(5,2) NOT NULL,      -- em kg
	altura INT NOT NULL,             -- em cm
	imc DECIMAL(5,2) NOT NULL,
	dt_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT fk_ficha_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id)  
);





