create database dfgr_db;
use dfgr_db;
show tables;

create table tb_cliente(
		id_cliente		int primary key auto_increment,
        nm_cliente		varchar(50) not null,
        ds_email		varchar(100) not null,
        ds_senha		varchar(30) not null,
        img_cliente		blob
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
        id_area			int,
        nm_advogado		varchar(50) not null,
        ds_email		varchar(100) not null,
        ds_senha 		varchar(30) not null,
        ds_localizacao	varchar(100) not null,
        ds_oab			varchar(8) not null,
        nr_telefone		varchar(20) not null,
        foreign key	(id_area) references tb_area_atuacao (id_area)
        
);

create table tb_consultoria(
		id_consultoria	int primary key auto_increment,
        id_advogado		int,
        id_cliente		int,
        ds_atuacao		varchar(30),
        dt_consultoria	date,
        hr_consultoria	datetime,
        ds_consultoria	varchar(200),
        nm_cliente		varchar(50),
        foreign key (id_advogado) references tb_advogado(id_advogado),
        foreign key (id_cliente) references	tb_cliente(id_cliente)
        
);

create table tb_contato(
		id_contato	int primary key auto_increment,
        id_advogado	int,
        id_cliente	int,
        foreign key (id_advogado) references tb_advogado(id_advogado),
        foreign key (id_cliente) references	tb_cliente(id_cliente)
        
);

create table tb_mensagem(
		id_mensagem	int primary key auto_increment,
        id_contato  int,
        id_advogado	int,
        id_cliente	int,
        dt_mensagem	datetime,
        ds_mensagem	varchar(10000),
        img_arquivo	varchar(400),
        foreign key(id_contato) references tb_contato(id_contato),
        foreign key (id_advogado) references tb_advogado(id_advogado),
        foreign key (id_cliente) references	tb_cliente(id_cliente)
);