create database dfgr_db;
use dfgr_db;
show tables;

create table tb_cliente(
		id_cliente		int primary key auto_increment,
        nm_cliente		varchar(50) not null,
        ds_telefone     varchar(20) not null,
        ds_localizacao  varchar(100) not null,
        ds_email		varchar(100) not null,
        ds_senha		varchar(30) not null,
        img_cliente		varchar(800)
);

create table tb_admin(
		id_admin 	int primary key auto_increment,
        ds_email	varchar(100) not null,
        ds_senha 	varchar(30) not null
        
);

create table tb_area_atuacao(
		id_area		int primary key auto_increment,
        nm_area		varchar(50)
);

create table tb_advogado(
		id_advogado		int primary key auto_increment,
        nm_advogado		varchar(50) not null,
        ds_localizacao	varchar(100) not null,
        ds_oab			varchar(8) not null,
        id_area			int not null,
        nr_telefone		varchar(20) not null,
        ds_email		varchar(100) not null,
        ds_senha 		varchar(30) not null,
        ds_advogado 	varchar(1000),
        ds_situacao     varchar(50),
        img_advogado	varchar(800),
        foreign key	(id_area) references tb_area_atuacao(id_area)
        
);

create table tb_consultoria(
		id_consultoria	int primary key auto_increment,
        id_advogado		int not null,
        id_cliente		int not null,
        id_area			int not null,
        dt_consultoria	date not null,
        hr_consultoria	time not null,
        ds_consultoria	varchar(200) not null,
        foreign key (id_area) references tb_area_atuacao(id_area),
        foreign key (id_advogado) references tb_advogado(id_advogado),
        foreign key (id_cliente) references	tb_cliente(id_cliente)
        
);

CREATE TABLE tb_sender(
		id_sender		INT PRIMARY KEY AUTO_INCREMENT,
        nm_sender		VARCHAR(50)
);

create table tb_contato(
		id_contato	int primary key auto_increment,
        id_advogado	int,
        id_cliente	int ,
        foreign key (id_advogado) references tb_advogado(id_advogado),
        foreign key (id_cliente) references	tb_cliente(id_cliente)
        
);

CREATE TABLE tb_mensagem(
	id_mensagem			INT PRIMARY KEY AUTO_INCREMENT,
    id_typeOfSender		INT,
    id_contato			INT,
    ds_mensagem			VARCHAR(2500),
    dt_mensagem			DATE,
    id_sender			INT,
    FOREIGN KEY (id_contato) REFERENCES tb_contato(id_contato),
    FOREIGN KEY (id_typeOfSender) REFERENCES tb_sender(id_sender)
);