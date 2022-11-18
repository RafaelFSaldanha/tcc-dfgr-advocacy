import { con } from "./connection.js"

export async function ClienteChat(idCliente){
    const comando = `
    SELECT  
    id_contato	                            contatoId,
    tb_contato.id_advogado	                idAdvogado,
    tb_contato.id_cliente	                idCliente,
    nm_cliente                              nomeCliente,
    nm_advogado                             nomeAdvogado
    FROM tb_contato
    inner join tb_cliente on tb_contato.id_cliente = tb_cliente.id_cliente
    inner join tb_advogado on tb_contato.id_advogado = tb_advogado.id_advogado
    WHERE tb_contato.id_cliente = ?
    `
    const [resposta] = await con.query(comando, [idCliente])
    return resposta;

}

export async function isChatCreated(clientId, advogadoId){
    const c = 
    `
        SELECT * FROM tb_contato WHERE id_cliente = ? AND id_advogado = ?;
    `
    const [r] = await con.query(c, [clientId, advogadoId]);
    return r;
}

export async function AdvogadoChat(idAdvogado){
    const comando = `
    SELECT  
    id_contato	                            contatoId,
    tb_contato.id_advogado	                idAdvogado,
    tb_contato.id_cliente	                idCliente,
    nm_cliente                              nomeCliente,
    nm_advogado                             nomeAdvogado
    FROM tb_contato
    inner join tb_cliente on tb_contato.id_cliente = tb_cliente.id_cliente
    inner join tb_advogado on tb_contato.id_advogado = tb_advogado.id_advogado
    WHERE tb_contato.id_advogado = ?
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
		tb_contato.id_cliente                   idCliente,
        tb_contato.id_advogado                  idAdvogado,
        nm_cliente		                        nomeCliente,
        nm_advogado                             nomeAdvogado
    FROM tb_contato
    inner join tb_cliente on tb_contato.id_cliente = tb_cliente.id_cliente
    inner join tb_advogado on tb_contato.id_advogado = tb_advogado.id_advogado
    WHERE tb_contato.id_contato = ?
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