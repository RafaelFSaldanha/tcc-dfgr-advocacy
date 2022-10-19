import { con } from "./connection.js";

export async function LoginAdvogado(email, senha) {
    const comando =
        `Select id_advogado    id,
                nm_advogado    nome,
                ds_email
         from   tb_advogado
         where  ds_email    =   ?
         and    ds_senha    =   ?         `

    const [linhas] = await con.query(comando, [email, senha]);
    return linhas[0];
}

export async function AgendarConsultoria(consultoria) {
    const comando = `insert into tb_consultoria (id_advogado, id_cliente, id_area, dt_consultoria, hr_consultoria, ds_consultoria)
    values (?, ?, ?, ?, ?, ?)`

    const [resposta] = await con.query(comando, [consultoria.idAdvogado, consultoria.idCliente, consultoria.area, consultoria.data, consultoria.hora, consultoria.descricao])
    consultoria.id = resposta.insertId;

    return consultoria;
}

export async function CadastroAdvogado(advogado) {
    const comando = ` insert into tb_advogado (nm_advogado, ds_localizacao, ds_oab, id_area, nr_telefone, ds_email, ds_senha, ds_situacao)
    values (?, ?, ?, ?, ?, ?, ?, 'Em Análise')`

    const [resposta] = await con.query(comando, [advogado.nome, advogado.localizacao, advogado.oab, advogado.area, advogado.telefone, advogado.email, advogado.senha, advogado.situacao])
    advogado.id = resposta.insertId;

    return advogado;
}
export async function ListarAreas() {
    const comando = `
    select id_area         as id,
            nm_area         as area
          from tb_area_atuacao`

    const [resposta] = await con.query(comando);

    return resposta
}


export async function Remover(id) {
    const comando =
        `
    delete from tb_consultoria
      where id_consultoria = ?
    `
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows
}

export async function alterarimgadvogado(imagem, id) {
    const comando = `
        update tb_advogado
            set img_advogado = ?
            where id_advogado = ?`

    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows
}

export async function EditarPerfil(id, advogado) {
    const comando = ` 
     UPDATE tb_advogado
            SET nm_advogado     = ?,
            id_area			    = ?,
            ds_email            = ?,
            ds_localizacao  	= ?,
            nr_telefone 	    = ?
            WHERE id_advogado       = ? `
    const [resposta]= await con.query(comando, [advogado.nome, advogado.area, advogado.email, advogado.localizacao, advogado.telefone, id])   
    return resposta.affectedRows     
}