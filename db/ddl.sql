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
        nm_advogado		varchar(50) not null,
        ds_localizacao	varchar(100) not null,
        ds_oab			varchar(8) not null,
        id_area			int not null,
        nr_telefone		varchar(20) not null,
        ds_email		varchar(100) not null,
        ds_senha 		varchar(30) not null,
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



insert into tb_cliente(nm_cliente, ds_email, ds_senha)
	values('Diego', 'fred', '123');
    
insert into tb_area_atuacao(nm_area)
	values("Familiar");	
    
insert into tb_advogado(id_area, nm_advogado, ds_email, ds_senha, ds_localizacao, ds_oab, nr_telefone)
	values(1, "fred", "fred1", "1234", "SÃo Paulo", "SP123456", "(11)982776312");
    
select*from tb_advogado;
select*from tb_consultoria;

select id_cliente         as id,
            nm_cliente         as cliente,
            ds_email          as email
          from tb_cliente;
          
