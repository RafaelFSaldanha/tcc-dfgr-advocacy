import { Router } from 'express';

import { CadastroCliente, LoginCliente } from '../repository/ClienteRepository.js';

const server = Router();


server.post('/cliente/cadastro', async (req,resp) => {
    try {
        const novocliente = req.body;
        
        if(!novocliente.nome){
            throw new Error("Insira um nome")
        }
        
        if(!novocliente.email){
            throw new Error("Insira um email")
        }
        
        if(!novocliente.senha){
            throw new Error("Insira uma senha")
        }
        
        const cliente = await CadastroCliente(novocliente)

        resp.send(cliente)

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
        
    }
})

server.post('/login/cliente', async (req, resp) => {
    try {
        const { email, senha } = req.body;
        const resposta = await LoginCliente(email, senha)
        if (!resposta) {
            throw new Error('Email ou senha inválidos!')
        }
            
        resp.send(resposta)
    }
    catch (err) {
        resp.status(401).send({
            erro: err.message
        })

    }
})

export default server;