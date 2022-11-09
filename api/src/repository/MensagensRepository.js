import { con } from "./connection.js";

export async function listarMensagens(idChat) {
    const comando = `
    SELECT 	id_mensagem			      id,
           id_typeOfSender		    TipoEnvio,
           ds_mensagem			      mensagem,
           dt_mensagem			      dataMensagem,
           id_sender			        IdEnvio
      FROM tb_mensagem
     WHERE id_contato = ?
     ORDER BY dt_mensagem;
    `
    const [resposta] = await con.query(comando, [idChat]);
    return resposta;
}

export async function EnviarMensagem(tipo, contatoId, mensagem, IdEnvio) {
    const date = new Date();
    const c = `
    INSERT INTO tb_mensagem(id_typeOfSender, id_contato, ds_mensagem, dt_mensagem, id_sender)
                VALUES(?, ?, ?, ?, ?);`;
    const [r] = await con.query(c, [tipo, contatoId, mensagem, date, IdEnvio]);
    return r.affectedRows;
  }
  