import { con } from "./connection.js";

export async function CadastroCliente(cliente){
    const comando=` insert into tb_cliente (nm_cliente, ds_telefone, ds_localizacao, ds_email, ds_senha)
    values (?, ?, ?, ?, ?)`

    const[resposta]= await con.query(comando, [cliente.nome, cliente.telefone, cliente.localizacao, cliente.email, cliente.senha])
    cliente.id = resposta.insertId;

    return cliente;
}

export async function LoginCliente(email, senha){
    const comando = 
        `Select id_cliente    idCliente,
                nm_cliente    nome,
                ds_telefone   telefone,
                ds_localizacao      localizacao,
                ds_email            email,
                ds_senha            senha,
                img_cliente         foto
         from   tb_cliente
         where  ds_email    =   ?
         and    ds_senha    =   ?         `

    const [linhas] = await con.query(comando, [email, senha]);
    return linhas[0];
}
export async function ClienteEmail(email) {
	const c = `
        SELECT ds_email FROM tb_cliente WHERE ds_email = ?;
        `;
	const [res] = await con.query(c, [email]);
	return res[0];
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
    id_advogado      idAdvogado,
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
    SELECT id_advogado      idAdvogado,
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

export async function buscarConsultoriaPorIdCliente(id) {
    const comando = 
    ` select
    id_consultoria        as id,
    nm_advogado				as advogado,
    nm_area                  as area,
    ds_email                as email,    
    dt_consultoria        as dia,
    hr_consultoria          as hora,
    ds_consultoria        as descricao
    from tb_consultoria
    inner join tb_area_atuacao on tb_area_atuacao.id_area = tb_consultoria.id_area
    inner join tb_advogado on tb_advogado.id_advogado = tb_consultoria.id_advogado
    where id_cliente = ? `
    

    const [linhas] = await con.query(comando, [id]);
    return linhas;
}

export async function buscarIdCliente(id) {
    const comando = `
        select id_cliente       as id,
               nm_cliente       as nome,
               ds_localizacao     as local,
               ds_telefone        as tel,
               ds_email           as email,
               ds_senha             as senha,
               img_cliente       as foto     
          from tb_cliente
          where id_cliente = ?
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

export async function informacoesparacliente(id) {
    const comando = 
    `select id_consultoria        as id,
            nm_area                  as area,    
            nm_advogado              as advogado,
            ds_email                as email,
            dt_consultoria        as dia,
            hr_consultoria          as hora,
            ds_consultoria        as descricao
            from tb_consultoria
            inner join tb_advogado on tb_advogado.id_advogado = tb_consultoria.id_advogado
            inner join tb_area_atuacao on tb_area_atuacao.id_area = tb_consultoria.id_area
            where id_consultoria = ?`
    

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

export async function EditarPerfilCliente(id, cliente) {
    const comando = 
    `UPDATE tb_cliente 
        SET  nm_cliente	= ?,
        ds_telefone = ?,
        ds_localizacao = ?, 
        ds_email = ?,		
        ds_senha = ?		
       WHERE id_cliente = ?
    `
    const [resposta] = await con.query (comando, [ cliente.nome, cliente.telefone, cliente.localizacao,cliente.email, cliente.senha, id])
    return resposta.affectedRows
}

