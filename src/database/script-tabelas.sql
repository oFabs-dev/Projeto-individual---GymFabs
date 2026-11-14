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

CREATE TABLE registro_imc (
	id INT PRIMARY KEY AUTO_INCREMENT,
	fk_usuario INT NOT NULL,
	imc DECIMAL(5,2) NOT NULL,
	dt_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_imc_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);





