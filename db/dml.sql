insert into tb_cliente(nm_cliente, ds_telefone, ds_localizacao, ds_email, ds_senha)
	values('Gabriel Firmino da Silva', '(11)99397-2905', 'São Paulo', 'gabriel@cliente.com', '1234');
    
insert into tb_cliente(nm_cliente, ds_telefone, ds_localizacao, ds_email, ds_senha)
	values('Diego Silva Días', '(11)98277-6312', 'São Paulo', 'diego@cliente.com', '1234');
    
    insert into tb_cliente(nm_cliente, ds_telefone, ds_localizacao, ds_email, ds_senha)
	values('Fred Matheus de Sá Carvalho', '(11)98277-6312', 'São Paulo', 'fred@cliente.com', '1234');
    
    insert into tb_cliente(nm_cliente, ds_telefone, ds_localizacao, ds_email, ds_senha)
	values('Rafael Saldanha', '(11)98277-6312', 'São Paulo', 'rafael@cliente.com', '1234');
    
insert into tb_area_atuacao(nm_area)
	values("Ambiental");	
    insert into tb_area_atuacao(nm_area)
	values("Cível");	
    insert into tb_area_atuacao(nm_area)
	values("Criminalista");	
    insert into tb_area_atuacao(nm_area)
	values("Tributário");	
    insert into tb_area_atuacao(nm_area)
	values("Imobiliario");	
    insert into tb_area_atuacao(nm_area)
	values("Familiar");	
    
        insert into tb_advogado(id_area, nm_advogado, ds_email, ds_senha, ds_localizacao, ds_oab, nr_telefone, ds_situacao)
	values(1, "Diego Silva Dias", "diego@advogado.com", "1234", "São Paulo", "SP123456", "(11)98277-6312", "Aceito");
    
        insert into tb_advogado(id_area, nm_advogado, ds_email, ds_senha, ds_localizacao, ds_oab, nr_telefone, ds_situacao)
	values(2, "Fred Matheus de Sá Carvalho", "fred@advogado.com", "1234", "São Paulo", "SP123456", "(11)98277-6312", "Aceito");
    
        insert into tb_advogado(id_area, nm_advogado, ds_email, ds_senha, ds_localizacao, ds_oab, nr_telefone, ds_situacao)
	values(3, "Gabriel Firmino da Silva", "firmino@advogado.com", "1234", "São Paulo", "SP123456", "(11)99397-2905", "Aceito");
    
        insert into tb_advogado(id_area, nm_advogado, ds_email, ds_senha, ds_localizacao, ds_oab, nr_telefone, ds_situacao)
	values(4, "Rafael Saldanha", "rafael@advogado.com", "1234", "São Paulo", "SP123456", "(11)98277-6312", "Aceito");
    
    insert into tb_admin(id_admin, ds_email, ds_senha)
	values(1, "admin", "admin");

	
INSERT INTO tb_sender(nm_sender)
			VALUES("Cliente");
            
INSERT INTO tb_sender(nm_sender)
			VALUES("Advogado");
            
INSERT INTO tb_sender(nm_sender)
			VALUES("Sistema");

INSERT INTO tb_contato(id_advogado, id_cliente)
            VALUES(1, 1);

INSERT INTO tb_mensagem(id_typeOfSender, id_contato, ds_mensagem, dt_mensagem, id_sender)
                VALUES(2, 1, "Olá Cliente", null, 1);