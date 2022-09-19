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
export async function Agendar(advogado, cliente, area, nome, data, hora, descricao){
    const r = await api.post('/advogado/admin/consultoria', {
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
    const r = await api.get('/advogado/admin/listarareas');
    return r.data
}
