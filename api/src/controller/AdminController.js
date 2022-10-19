import { Router } from 'express';
import { AlterarSit, ListarAdvAdmin, ListarAdvAdmin2, ListarConsultorias, LoginAdmin } from '../repository/AdminRepository.js';

const server = Router();


server.post('/login/admin', async (req, resp) => {
    try {
        const { email, senha } = req.body;
        const resposta = await LoginAdmin(email, senha)

        if (!resposta) {
            throw new Error('Senha ou E-mail incorretos.')
        }
            
        resp.send(resposta)
    }
    catch (err) {
        resp.status(401).send({
            erro: err.message
        })

    }
})

server.get('/admin/listarconsultas', async (req, resp) => {
    try {
        const resposta = await ListarConsultorias()

        resp.send(resposta)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/admin/listaradvogado', async (req, resp) => {
    try {
        const resposta = await ListarAdvAdmin()

        resp.send(resposta)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/admin/alterar/:id', async (req, resp) => {
    try {
        const {id}= req.params
        const resposta = await AlterarSit(id)

        resp.status(204).send()
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/admin/listaradvogado2', async (req, resp) => {
    try {
        const resposta = await ListarAdvAdmin2()

        resp.send(resposta)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.delete('/admin/advogado/:id', async (req, resp) =>{
    try {
        const {id} = req.params;
        const resposta = await Remover(id)

        if(resposta != 1){
            throw new Error('Não foi possivel deletar o advogado')
        }
        else{
        resp.status(204).send();
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;