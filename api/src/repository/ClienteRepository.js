import { con } from "./connection.js";

export async function CadastroCliente(cliente){
    const comando=` insert into tb_cliente (nm_cliente, ds_email, ds_senha)
    values (?, ?, ?)`

    const[resposta]= await con.query(comando, [cliente.nome, cliente.email, cliente.senha])
    cliente.id = resposta.insertId;

    return cliente;
}

export async function LoginCliente(email, senha){
    const comando = 
        `Select id_cliente    id,
                nm_cliente    nome,
                ds_email
         from   tb_cliente
         where  ds_email    =   ?
         and    ds_senha    =   ?         `

    const [linhas] = await con.query(comando, [email, senha]);
    return linhas[0];
}