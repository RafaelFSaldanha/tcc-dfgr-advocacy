import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function AdvogadoLogin(email,senha){
    const r = await api.post('/advogado/login', {
        email: email,
        password: senha
    })
    return r.data

}