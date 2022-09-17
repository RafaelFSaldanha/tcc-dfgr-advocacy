import { con } from "./connection.js";

export async function LoginAdvogado(email, senha){
    const comando = 
        `Select ds_email    email,
                ds_senha    password
         from   tb_advogado
         where  ds_email    =   ?
         and    ds_senha    =   ?         `

    const [linhas] = await con.query(comando, [email, senha]);
    return linhas[0];
}