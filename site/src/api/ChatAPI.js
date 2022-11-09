import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export default function ClienteEnviarMensagem(idChat, idAdvogado, idCliente, mensagem){
    const r = api.post(`/mensagem/${idChat}?idAdvogado=${idAdvogado}&idCliente=${idCliente}`, {
        mensagem: mensagem,
    });
    return r.data
}

export async function listarMensagens(idChat){
    const r = api.get(`/mensagens?chat=${idChat}`)
    return r.data
}

export async function listarConversas(idAdvogado, idCliente){
    const r = await api.get(`/chat?idAdvogado=${idAdvogado}&idCliente=${idCliente}`)
    return r.data;
}

export async function iniciarChat(idCliente, idAdvogado){
    const r = await api.post(`/chat`, {
        idCliente: idAdvogado,
        idAdvogado: idAdvogado,
    });
    return r.data
}

export async function listarClientes(idAdvogado){
    const r = await api.get(`/advogado/chat/${idAdvogado}`)
    return r.data
}