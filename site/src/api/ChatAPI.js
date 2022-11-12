import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export function ClienteEnviarMensagem(idChat, idAdvogado, idCliente, mensagem){
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
    let call= `/chat?idAdvogado=${idAdvogado}&idCliente=${idCliente}`
    if (!idAdvogado || idAdvogado == undefined) {
        call = `/chat?idAdvogado=&idCliente=${idCliente}`
    }
    else if (!idCliente || idCliente == undefined) {
        call = `/chat?idAdvogado=${idAdvogado}&userId=`
    }
    const r = await api.get(call)
    return r.data;
}

export async function iniciarChat(idCliente, idAdvogado){
    const r = await api.post(`/chat`, {
        idCliente: idCliente,
        idAdvogado: idAdvogado,
    });
    return r.data
}

export async function listarClientes(idAdvogado){
    const r = await api.get(`/advogado/chat/${idAdvogado}`)
    return r.data
}

export default function EnviarMensagem(idChat, tipo, idEnvio, mensagem){
    const r = api.post(`mensagens?tipo=${tipo}&contato=${idChat}&idEnvio=${idEnvio}`, {
        mensagem: mensagem
    });
    return r.data
}

export async function PegarInfoProChatId(idChat) {
    const r = await api.get(`/chat/procurar?id=${Number(idChat)}`);
    return r.data;
}