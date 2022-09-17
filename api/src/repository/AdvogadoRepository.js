import { con } from "./connection.js";

export async function LoginAdvogado(email, senha){
    const comando = 
        `Select id_advogado     id
                ds_email        email,
         from   tb_advogado
         where  ds_email    =   ?
         and    ds_senha    =   ?         `

    const [linhas] = await con.query(comando, [email, senha]);
    return linhas[0];

}
export async function AgendarConsultoria(consultoria) {
    const comando= `insert into tb_consultoria (id_advogado, id_cliente, ds_atuacao, nm_cliente, dt_consultoria, hr_consultoria, ds_consultoria)
    values (?, ?, ?, ?, ?, ?, ?)`

    const[resposta]= await con.query(comando, [consultoria.advogado, consultoria.cliente, consultoria.atuacao, consultoria.nome, consultoria.data, consultoria.hora, consultoria.descricao])
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