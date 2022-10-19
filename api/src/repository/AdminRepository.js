import { con } from "./connection.js";

export async function LoginAdmin(email, senha) {
    const comando =
        `Select id_admin    id,
                ds_email
         from   tb_admin
         where  ds_email    =   ?
         and    ds_senha    =   ?         `

    const [linhas] = await con.query(comando, [email, senha]);
    return linhas[0];
}

export async function ListarConsultorias() {
    const comando=
    `select
        nm_advogado        as advogado,
        id_consultoria        as id,
        nm_area                  as area,    
        nm_cliente              as cliente,
        dt_consultoria        as dia,
        hr_consultoria          as hora,
        ds_consultoria        as descricao
        from tb_consultoria
        inner join tb_cliente on tb_cliente.id_cliente = tb_consultoria.id_cliente
        inner join tb_area_atuacao on tb_area_atuacao.id_area = tb_consultoria.id_area
        inner join tb_advogado on tb_advogado.id_advogado = tb_consultoria.id_advogado
        `
    const [linhas] = await con.query(comando);
    return linhas;
}

export async function ListarAdvAdmin(){
    const comando = 
    ` 
    SELECT
	   nm_advogado	    nome,
       ds_oab	        oab,
	   ds_localizacao   local,
       ds_email         email
  FROM tb_advogado
  WHERE ds_situacao     = 'Em Análise'
    `
    
    const [resposta] = await con.query(comando)
    return resposta
}

export async function AlterarSit( id){
    const comando = 
    ` 
    update tb_advogado
	set ds_situacao = 'Aceito'
    where id_advogado= ?
    `
    
    const [resposta] = await con.query(comando, [id])
    return resposta
}

export async function ListarAdvAdmin2(){
    const comando = 
    ` 
    SELECT
    id_advogado      id,
    nm_advogado	    nome,
    nm_area          area, 
    ds_localizacao   local,
    ds_email         email
    FROM tb_advogado
    inner join tb_area_atuacao on tb_area_atuacao.id_area = tb_advogado.id_area
    WHERE ds_situacao     = 'Aceito'
    `
    
    const [resposta] = await con.query(comando)
    return resposta
}

export async function Remover(id) {
    const comando =
        `
    delete from tb_advogado
      where id_advogado = ?
    `
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows
}