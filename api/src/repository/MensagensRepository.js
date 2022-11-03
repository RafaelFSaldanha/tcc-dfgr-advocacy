import { con } from "./connection.js";

export async function listarMensagens(idChat) {
    const comando = `
    SELECT
            id_mensagem                     idMensagem,
            tb_mensagem.id_contato          idChat,
            ds_mensagem                     Mensagem,
            dt_mensagem                     dataMensagem,
            id_cliente						idCliente,
            id_advogado						idAdvogado
    FROM tb_mensagem
    WHERE tb_mensagem.id_contato = ?
    `
    const [resposta] = await con.query(comando, [idChat]);
    return resposta;
}

export async function ClienteEnviarMensagem(idChat, idCliente, mensagem, dataMensagem) {
    const comando = `
    INSERT INTO tb_mensagem(id_contato, id_cliente, ds_mensagem, dt_mensagem)
                        VALUES(?, ?, ?, ?)`

    const [r] = await con.query(comando, [idChat, idCliente, mensagem, dataMensagem]);
    return r.affectedRows;
}

export async function AdvogadoEnviarMensagem(idChat, idAdvogado, mensagem, dataMensagem) {
    const comando = `
    INSERT INTO tb_mensagem(id_contato, id_advogado, ds_mensagem, dt_mensagem)
                        VALUES(?, ?, ?, ?)`

    const [r] = await con.query(comando, [idChat, idAdvogado, mensagem, dataMensagem]);
    return r.affectedRows;
}