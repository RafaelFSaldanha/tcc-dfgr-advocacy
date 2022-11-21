import { con } from "./connection.js";

export async function ListarAreas() {
    const comando = `
    select id_area         as id,
            nm_area         as area
          from tb_area_atuacao`

    const [resposta] = await con.query(comando);

    return resposta
}




export async function buscarAreaPorId(id) {
    const comando = `
        select id_area        as id,
               nm_area        as area
          from tb_area
         where id_area = ?
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

export async function buscarAdvogadoPorId(id) {
    const comando = `
        select id_advogado        as id,
               nm_advogado        as area
          from tb_advogado
         where id_advogado = ?
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

export async function ListarClientes() {
    const comando = `
    select id_cliente         as id,
            nm_cliente         as cliente,
            ds_email          as email
          from tb_cliente`

    const [resposta] = await con.query(comando,[]);

    return resposta
}

export async function buscarConsultoriaPorId(id) {
    const comando = 
    `select id_advogado        as advogado,
        id_consultoria        as id,
        nm_area                  as area,    
        nm_cliente              as cliente,
        dt_consultoria        as dia,
        hr_consultoria          as hora,
        ds_consultoria        as descricao
        from tb_consultoria
        inner join tb_cliente on tb_cliente.id_cliente = tb_consultoria.id_cliente
        inner join tb_area_atuacao on tb_area_atuacao.id_area = tb_consultoria.id_area
        where id_advogado = ?`
    

    const [linhas] = await con.query(comando, [id]);
    return linhas;
}

export async function buscarId(id) {
    const comando = 
    `select id_consultoria        as id,
            nm_area                  as area,    
            nm_cliente              as cliente,
            dt_consultoria        as dia,
            hr_consultoria          as hora,
            ds_consultoria        as descricao
            from tb_consultoria
            inner join tb_cliente on tb_cliente.id_cliente = tb_consultoria.id_cliente
            inner join tb_area_atuacao on tb_area_atuacao.id_area = tb_consultoria.id_area
            where id_consultoria = ?`
    

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

export async function buscarIdAdvogado(id) {
    const comando = `
        select id_advogado        as id,
               nm_advogado        as nome,
               ds_localizacao     as local,
               ds_oab             as oab,
               nm_area            as area,
               nr_telefone        as tele,
               ds_email           as email,
               ds_senha           as senha,
               ds_advogado        as descricao,  
               img_advogado       as foto     
          from tb_advogado
          inner join tb_area_atuacao on tb_area_atuacao.id_area = tb_advogado.id_area
          where id_advogado = ?
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

export async function buscarIdAdvogado2(id) {
    const comando = `
        select id_advogado        as idAdvogado,
               nm_advogado        as nome,
               ds_localizacao     as localizacao,
               ds_senha           as senha,
               ds_oab             as oab,
               ds_advogado        as descricao, 
               nm_area            as area,
               nr_telefone        as telefone,
               ds_email           as email,
               img_advogado       as foto     
          from tb_advogado
          inner join tb_area_atuacao on tb_area_atuacao.id_area = tb_advogado.id_area
          where id_advogado = ?
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas;
}


