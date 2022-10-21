import { con } from "./connection.js";

export async function CadastroCliente(cliente){
    const comando=` insert into tb_cliente (nm_cliente, ds_email, ds_senha)
    values (?, ?, ?)`

    const[resposta]= await con.query(comando, [cliente.nome, cliente.email, cliente.senha])
    cliente.id = resposta.insertId;

    return cliente;
}

export async function LoginCliente(email, senha){
    const comando = 
        `Select id_cliente    id,
                nm_cliente    nome,
                ds_email
         from   tb_cliente
         where  ds_email    =   ?
         and    ds_senha    =   ?         `

    const [linhas] = await con.query(comando, [email, senha]);
    return linhas[0];
}

export async function alterarimgcliente(imagem, id){
    const comando=`
        update tb_cliente
            set img_cliente = ?
            where id_cliente = ?`

    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows  
}

export async function ListarAssociados(){
    const comando = 
    ` 
    SELECT
    id_advogado      id,
    nm_advogado	    nome,
    nm_area          area,
    ds_oab           oab,    
    ds_localizacao   localizacao,
    ds_email         email,
    nr_telefone       telefone,  
    ds_advogado      descricao,
    img_advogado    foto
    FROM tb_advogado
    inner join tb_area_atuacao on tb_area_atuacao.id_area = tb_advogado.id_area
    WHERE ds_situacao     = 'Aceito'
    `
    
    const [resposta] = await con.query(comando)
    return resposta
}

export async function PesquisaAssociado(nome){
    const comando= `
    SELECT id_advogado      id,
    nm_advogado	    nome,
    nm_area          area,
    ds_oab           oab,    
    ds_localizacao   localizacao,
    ds_email         email,
    nr_telefone       telefone,  
    ds_advogado      descricao,
    img_advogado    foto
    FROM tb_advogado
    inner join tb_area_atuacao on tb_area_atuacao.id_area = tb_advogado.id_area
    WHERE nm_advogado		like ? and 
    ds_situacao     = 'Aceito'
        `
    const [resposta] = await con.query(comando, [`%${nome}%`])
    return resposta
}