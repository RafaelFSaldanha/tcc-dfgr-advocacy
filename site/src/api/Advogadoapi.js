import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function AdvogadoLogin(email,senha){
    const r = await api.post('/advogado/login', {
        email: email,
        senha: senha
    })
    return r.data

}
export async function AdvogadoCadastro(nome, localizacao, oab, area, telefone, email, senha,){
    const r = await api.post('/advogado/cadastro' , {
        nome: nome,
        localizacao: localizacao,
        oab: oab,
        area: area,
        telefone: telefone,
        email: email,
        senha: senha


    })
    return r.data
}
export async function Agendar(advogado, cliente, area, nome, data, hora, descricao){
    const r = await api.post('/advogado/admin/agendar', {
        advogado: advogado,
        cliente: cliente,
        area: area,
        nome: nome,
        data: data,
        hora: hora,
        descricao: descricao
    })
    return r.data

}
export async function ListarAreas(){
    const r = await api.get('/advogado/listarareas');
    return r.data
}

export async function ListarClientes(){
    const r = await api.get('/advogado/listarclientes');
    return r.data
}
