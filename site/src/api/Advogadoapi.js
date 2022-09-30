import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function AdvogadoLogin(email,senha){
    const r = await api.post('/login/advogado', {
        email: email,
        senha: senha
    })
    return r.data

}
export async function AdvogadoCadastro(nome, localizacao, oab, area, telefone, email, senha,){
    const r = await api.post('/cadastro/advogado' , {
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


    export async function Agendar(idAdvogado, idCliente, area, data, hora, descricao){
        const r = await api.post('/advogado/admin/agendar', {
            idAdvogado,
            idCliente,
            area,
            data,
            hora,
            descricao
            
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

export async function ListarConsultorias(id) {
    const r = await api.get(`/advogado/listarconsultoriasid/${id}`)
    return r.data
}