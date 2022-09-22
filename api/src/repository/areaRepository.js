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
    
    const [resposta] = await con.query(comando);

    return resposta
}

