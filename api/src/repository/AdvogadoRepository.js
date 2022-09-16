import { con } from "./connection.js";

export async function LoginAdvogado(email, senha){
    const comando = 
        `Select id_advogado    id,
                nm_advogado    nome
         from   tb_advogado
         where  ds_email    =   ?
         and    ds_senha    =   ?         `

    const [linhas] = await con.query(comando, [email, senha]);
    return linhas[0];
}