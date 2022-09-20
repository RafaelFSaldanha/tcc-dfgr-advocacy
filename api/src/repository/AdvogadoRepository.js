import { con } from "./connection.js";

export async function LoginAdvogado(email, senha){
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
    const comando= `insert into tb_consultoria (id_advogado, id_cliente, id_area, nm_cliente, dt_consultoria, hr_consultoria, ds_consultoria)
    values (?, ?, ?, ?, ?, ?, ?)`

    const[resposta]= await con.query(comando, [consultoria.advogado, consultoria.cliente, consultoria.area, consultoria.nome, consultoria.data, consultoria.hora, consultoria.descricao])
    consultoria.id = resposta.insertId;

    return consultoria;
}

export async function CadastroAdvogado(advogado){
    const comando=` insert into tb_advogado(id_area, nm_advogado, ds_email, ds_senha, ds_localizacao, ds_oab, nr_telefone)
    values (?, ?, ?, ?, ?, ?, ?)`

    const[resposta]= await con.query(comando, [advogado.area, advogado.nome, advogado.email, advogado.senha, advogado.localizacao, advogado.oab, advogado.telefone])
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