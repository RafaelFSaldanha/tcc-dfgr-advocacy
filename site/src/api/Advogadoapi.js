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

export async function CadastrarCliente(nome, email, senha) {
    const r = await api.post('/cliente/cadastro' ,{
        nome,
        email,
        senha
    })

    return r.data
}

export async function ClienteLogin(email,senha){
    const r = await api.post('/login/cliente', {
        email: email,
        senha: senha
    })
    return r.data
}

export async function Deletar(id){
    const resposta = await api.delete(`/advogado/consultoria/${id}`);
    return resposta.status
}

export async function Informaçoes(id) {
    const r = await api.get(`/advogado/id/${id}`)
    return r.data
}
export async function AdvogadoId(id) {
    const r = await api.get(`/advogado/advogadosid/${id}`)
    return r.data
}

export async function enviarfotoadvogado(id, imagem){
    const formData = new FormData();
    formData.append('foto', imagem);

    const resposta = await api.put(`/advogado/${id}/foto`, formData,{
        headers:{
            "Content-Type": "multipart/form-data"
        },
    })
}

export async function buscarfoto(imagem){
    return `${api.getUri()}/${imagem}`
}

export async function EditPerfil(id, nome, area, email, localizacao, telefone){
    const resposta = await api.put(`/advogado/editar/${id}`, {
        nome,
        area,
        email,
        localizacao,
        telefone
    });
    return resposta.data
}

export async function AdminLogin(email,senha){
    const r = await api.post('/login/admin', {
        email: email,
        senha: senha
    })
    return r.data
}

export async function ListarConsultasAdmin(){
    const r = await api.get('/admin/listarconsultas');
    return r.data
}
export async function ListarAdvAdmin(){
    const r = await api.get('/admin/listaradvogado');
    return r.data
}

export async function AlterarSit(id){
    const r = await api.put(`/admin/alterar/${id}`);
    return r.data
}

export async function ListarAdvAdmin2(){
    const r = await api.get('/admin/listaradvogado2');
    return r.data
}

export async function DeletarAdvogado(id){
    const resposta = await api.delete(`/admin/advogado/${id}`);
    return resposta.status
}

export async function ListarAssociados(){
    const r = await api.get('/listarassociados');
    return r.data
}

export async function PesquisarAssociados(nome) {    
    const resposta = await api.get(`/pesquisarassociados?nome=${nome}`);
    return resposta.data
}