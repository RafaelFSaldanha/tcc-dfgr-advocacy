import { con } from "./connection.js"

export async function ClienteChat(idCliente){
    const comando = `
    SELECT *
        FROM tb_contato
        WHERE id_cliente = ?
    `
    const [resposta] = await con.query(comando, [idCliente])
    return resposta[0];

}

export async function AdvogadoChat(idAdvogado){
    const comando = `
    SELECT  
        id_contato	                contatoId,
        id_advogado	                idAdvogado,
        tb_contato.id_cliente	    idCliente,
        nm_cliente                  nomeCliente
        FROM tb_contato
        inner join tb_cliente on tb_contato.id_cliente = tb_cliente.id_cliente
        WHERE id_advogado = ?
    `
    const [resposta] = await con.query(comando, [idAdvogado])
    return resposta;

}

export async function CriarChat(idCliente, idAdvogado) {
    const comando = `
    INSERT INTO tb_contato(id_cliente, id_advogado)
            VALUES(?, ?)
    `
    const [resposta] = await con.query(comando, [idCliente, idAdvogado])
    return resposta.insertId;
}

export async function ListarClientesChat(idChat) {
    const comando = `
    SELECT 
		tb_contato.id_cliente       idCliente,
        id_advogado                 idAdvogado,
        nm_cliente		            nomeCliente
    FROM tb_contato
    inner join tb_cliente on tb_contato.id_cliente = tb_cliente.id_cliente
    WHERE id_contato = ?
    `
    const [resposta] = await con.query(comando, [idChat]);
    return resposta
}


export async function ValidaçãoChat(idCliente, idAdvogado){
    const c = `
        select id_contato    id,
        id_advogado 	advogado,
        id_cliente	cliente
        from tb_contato
        where id_cliente like ? and id_advogado like ?; `

        const [resposta]= await con.query(c, [idCliente, idAdvogado]);
        return resposta[0]
}